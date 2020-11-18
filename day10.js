const express = require('express');
const app = express();
const port = 8900; 
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongoUrl = "mongodb://localhost:27017";
var bodyParser=require('body-parser');
var cors = require('cors');
let db;
app.use(cors());



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cors());

//restaurant
app.get('/restauranthome',(req,res) => {
    var query = {}
    if(req.query.city && req.query.mealtype){
        query={city:req.query.city,"type.mealtype": req.query.mealtype}
    }
    else if(req.query.city){
        query = {city:req.query.city} 
    }else if(req.query.mealtype){
        query={"type.mealtype": req.query.mealtype}
    }
    
    db.collection('MyRestaurant').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.get('/restaurantdetails/:id',(req,res) => {
    console.log(req.params.id)
    var query = {_id:req.params.id}
    db.collection('MyRestaurant').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})
//pagination

 //  const count = page.length / 2;
   

app.get('/restaurantlist/:city/:mealtype',(req,res) => {
    var query = {}
    var sort = {name:1}
    
//     var page= parseInt(req.query.page)
//     var limit = parseInt(req.query.limit);
   

//     var start = (page-1)*limit ;
//     var end= (page*limit);

//   var results={}
    
//   if(end< page.length){
//       results.next={
//              page:page+1,
//           limit:limit
           
//        }
//    }
   
//    if(start > 0){ 
//        results.previous={
//            page:page-1,
//          limit:limit
         
//         }
//       }

          
    if(req.query.cuisine&&req.query.lcost && req.query.hcost&&req.query.sort){
        query = {city:req.params.city,"type.mealtype": req.params.mealtype,"Cuisine.cuisine":req.query.cuisine,cost:{$lt:parseInt(req.query.hcost),$gt:parseInt(req.query.lcost)}}
        sort={cost:parseInt(req.query.sort)} 
    }
    else if(req.query.cuisine&&req.query.lcost && req.query.hcost){
        query = {city:req.params.city,"type.mealtype": req.params.mealtype,"Cuisine.cuisine":req.query.cuisine,cost:{$lt:parseInt(req.query.hcost),$gt:parseInt(req.query.lcost)}}
    }
    else if(req.query.cuisine&&req.query.sort){
        query = {city:req.params.city,"type.mealtype": req.params.mealtype,"Cuisine.cuisine":req.query.cuisine}
        sort={cost:parseInt(req.query.sort)} 
    }
    else if(req.query.lcost && req.query.hcost&&req.query.sort){
        query = {city:req.params.city,"type.mealtype": req.params.mealtype,cost:{$lt:parseInt(req.query.hcost),$gt:parseInt(req.query.lcost)}}
        sort={cost:parseInt(req.query.sort)} 
    }
    else if(req.query.cuisine){
        query = {city:req.params.city,"type.mealtype": req.params.mealtype,"Cuisine.cuisine":req.query.cuisine} 

    }else if(req.query.lcost && req.query.hcost){
        query={city:req.params.city,"type.mealtype": req.params.mealtype,cost:{$lt:parseInt(req.query.hcost),$gt:parseInt(req.query.lcost)}}

    }else if(req.query.sort){
        query={city:req.params.city,"type.mealtype": req.params.mealtype}
        sort={cost:parseInt(req.query.sort)}
    }else{
        query = {city:req.params.city,"type.mealtype": req.params.mealtype}
        sort = {name:1}
    }
    db.collection('MyRestaurant').find(query).sort(sort).toArray((err,result) => {
        if(err) throw err;
        
        // var result = result.slice(start,end);
         res.status(200).send(result);
       
        
    })
})





//City List
app.get('/location',(req,res) => {
    db.collection('city').find({}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//cuisine
app.get('/cuisine',(req,res) => {
    db.collection('cuisine').find({}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//mealtype
app.get('/mealtype',(req,res) => {
    db.collection('mealtype').find({}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//post API //PLACE ORDER



app.post('/placeorder',(req,res)=>{
    console.log(req.body);

    var data={

       //these data should be autofill (order id and restro id). these user can't chnage or fill.

         _id:req.body.order_id,
         Name:req.body.name,
         Phone:req.body.phone,
         Email:req.body.email,
         Address:req.body.address,
         //for which restro we are placing order we need that//
         Restro_id:req.body.restro_id,
         Rest_name:req.body.rest_name,
         Person:req.body.person
    }

   // the above data will be inserted in this collection//

    db.collection('orders').insert(req.body,(err,result) =>{
        if(err){
             throw err
        }
        else{

            //the postman json form i wan tto insert in this place order //
        console.log("Your Order is placed Successfully.Thank You.")
        }
    });
});

//ORDER DETAILS

app.get('/ordershistory',(req,res) => {
    db.collection('orders').find({}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    });
});

MongoClient.connect(mongoUrl,(err,client) => {
    if(err) console.log(err)
    db= client.db('zomatoAPI');
    app.listen(port,(err) => {
        if(err) throw err;
        console.log(`Server is running on port ${port}`)
    })
})
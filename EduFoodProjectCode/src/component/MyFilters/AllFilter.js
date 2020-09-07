import React, { Component } from 'react';
import axios from 'axios';
import queryString from "query-string";

var restrodetail = "http://localhost:8900/restaurantlist";
var myrestrourl="http://localhost:8900/restauranthome";


class AllFilter extends Component{
    constructor(props){
        super(props)

        this.state={
            restlist:[],
            locationlist:[],
            location:null,
            city:null,
            cuisine:null,
            meal:null,
            cost:null,
          

        }
  
        AllFilterhandler=(event)=>{
            var mealtypeID= parseInt(this.props.mealidnumber)
            var cityIDs=parseInt(this.props.citiesidnumber)
            var Filter=parseInt(event.target.value)
            var price=event.target.value
            var cost=(price).split(',')
            var lcost=parseInt(cost[0]);
            var hcost=parseInt(cost[1]);
            var url;
    
            if(===""){
                url=`${restrodetail}/${cityIDs}/${mealtypeID}`
    
            }
            else {
                url=`${restrodetail}/${cityIDs}/${mealtypeID}?hcost=${hcost}&lcost=${lcost}`
            }
           
    
            axios.get(url)
    
            .then((response)=>{this.props.costing(response.data)})
               
           }
        
    
        render(){
            return(
                <React.Fragment>
                <h3>Cost for two</h3>
                <br/>
    
            <div onChange={this.CostingFilter}>
    
            {/* //values are to be comma seperated */}
            
         <label className="radio">
         <input type="radio" value=" " name="cost"/>All
         </label>     
    
         <label className="radio">
         <input type="radio" value="0,501" name="cost"/>Less than ₹500
         </label>
         <label className="radio">
         <input type="radio" value="501,1001" name="cost"/>₹500-₹1000
         </label>
         <label className="radio">
         <input type="radio" value="1001,1501" name="cost"/>₹1000-₹1500
         </label>
         <label className="radio">
         <input type="radio" value="1500,2001" name="cost"/>₹1500-₹2000
         </label>
         <label className="radio">
         <input type="radio" value="2001,3000" name="cost"/>₹2000+
         </label>  
         </div> 
         </React.Fragment>
            )
            }
    }
  
}

}

export default AllFilter;
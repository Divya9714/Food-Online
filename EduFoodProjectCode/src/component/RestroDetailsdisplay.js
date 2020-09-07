import React from 'react';
import {Link} from 'react-router-dom';

import './RestaurantsDetails.css';


var RestroDisplay =(props)=>{

      console.log(props)

   var renderRestroTable=({restrodata})=>

{
    if(restrodata.length!=0){
        return restrodata.map((item,index)=>{
          
            return(
           
                <tr key={index}>
                      
                      <td><img className="img-responsive" id="iconimage" src={item.thumb1}/></td> 
                      <td><Link to={`/restro/${item._id}`}>{item.name}</Link></td>
                      <td>{item.locality}</td>
                      <td>{item.Cuisine[0].name},{item.Cuisine[1].name}</td>
                      <td>{item.type[0].name},{item.type[1].name}</td>
                      <td>₹{item.cost}</td>
                </tr>
            )
        })
    }

    else {
        return(

      <td>
          <tr>
                    <center>
                    <h1>Sorry,No result found</h1>
                    <h2>Entschuldigung, kein Ergebnis gefunden</h2>
                    <h3>죄송합니다 결과가 없습니다</h3>
                    </center>
             </tr>
               </td>
        )
    }
}


    return(
                                

        <div className="conatiner-fluid">
        
               <center><h3>Restaurants List</h3></center>
               <br/>

                          <table className="table table-responsive">

                               <thead>
                                     <tr>
                                            <th>Image</th>
                                            <th> Name</th>
                                            <th> Locality</th>
                                            <th> Cuisine</th>
                                            <th> Type</th>
                                            <th> Cost</th>
                                            
                                     </tr>
                                </thead>  

                                 <tbody>
                                        {renderRestroTable(props)}
                                 </tbody>
    
                           </table>
                           </div>
                       
        
  
    
    )
}
export default RestroDisplay;
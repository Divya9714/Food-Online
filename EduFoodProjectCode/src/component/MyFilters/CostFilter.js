import React, { Component } from 'react';
import axios from 'axios';
 

var restrodetail = "http://localhost:8900/restaurantlist";

class  CostFilter extends Component{
      


    CostingFilter=(event)=>{
        var mealtypeID= parseInt(this.props.mealidnumber)
        var cityIDs=parseInt(this.props.citiesidnumber)
        var price=(event.target.value)
        var cost=(price).split(',')
        var lcost=parseInt(cost[0]);
        var hcost=parseInt(cost[1]);
        var url;

        if(price===" "){
            url=`${restrodetail}/${cityIDs}/${mealtypeID}`

        }
        else {
            url=`${restrodetail}/${cityIDs}/${mealtypeID}?hcost=${hcost}&lcost=${lcost}`
        }
       


   //to display it , we will use props.

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
     <input type="radio" value=" " className="filter" name="cost"/>All
     </label>     

     <label className="radio">
     <input type="radio" value="0,501" className="filter" name="cost"/>Less than ₹500
     </label>
     <label className="radio">
     <input type="radio" value="501,1001" className="filter" name="cost"/>₹500-₹1000
     </label>
     <label className="radio">
     <input type="radio" value="1001,1501" className="filter" name="cost"/>₹1000-₹1500
     </label>
     <label className="radio">
     <input type="radio" value="1500,2001" className="filter" name="cost"/>₹1500-₹2000
     </label>
     <label className="radio">
     <input type="radio" value="2001,3000" className="filter" name="cost"/>₹2000+
     </label>  
     </div> 
     </React.Fragment>
        )
        }
}
export default CostFilter;
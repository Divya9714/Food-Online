import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


var restrodetail = "http://localhost:8900/restaurantlist";

class FilterCuisine extends Component{
   

    cuisineFilter=(event)=>{

        var mealtypeID= parseInt(this.props.mealidnumber)
        var cityIDs=parseInt(this.props.citiesidnumber)
        var cuisine=parseInt(event.target.value)
        
          var url;
          if(cuisine===0){
             url=`${restrodetail}/${cityIDs}/${mealtypeID}`   
          }
          else {
         
              url=`${restrodetail}/${cityIDs}/${mealtypeID}?cuisine=${cuisine}`
            } 
        
       axios.get(url)

     .then((response)=>{
      this.props.filtering(response.data)})
        
    }


    render(){
        return(
             
            <React.Fragment>
              <h3>Cuisine</h3>
            <div >

            <label className="radio" onChange={this.cuisineFilter}>
               <input type="radio" value={0} name="cuisine"/>All
           </label>     
   
         <label className="radio" onChange={this.cuisineFilter}>
               <input type="radio" value={1} name="cuisine"/>North
           </label>
           <label className="radio" onChange={this.cuisineFilter}>
               <input type="radio" value={2} name="cuisine"/>South 
           </label>
           <label className="radio" onChange={this.cuisineFilter}>
               <input type="radio" value={3} name="cuisine"/>Chinese 
           </label>
           <label className="radio" onChange={this.cuisineFilter}>
               <input type="radio" value={4} name="cuisine"/>Fast Food 
           </label>
           <label className="radio" onChange={this.cuisineFilter}>
               <input type="radio" value={5} name="cuisine"/>Street Food
           </label>  
           
       </div> 

       </React.Fragment>
        )
    }

    
  
}

export default FilterCuisine;
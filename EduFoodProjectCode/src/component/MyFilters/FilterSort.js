import React, { Component } from 'react';
import axios from 'axios';
 

var restrodetail = "http://localhost:8900/restaurantlist";

class FilterSort extends Component{
  

    SortingFilter=(event)=>{
        var mealtypeID= parseInt(this.props.mealidnumber)
        var cityIDs=parseInt(this.props.citiesidnumber)
        var sort=parseInt(event.target.value)
        var cost=parseInt(event.target.sort)
        
        var url;

        if(cost==="-1"){
            url=`${restrodetail}/${cityIDs}/${mealtypeID}?sort=${sort}`

        }
        else {
            url=`${restrodetail}/${cityIDs}/${mealtypeID}?sort=${sort}`
        }

        
        axios.get(url)

        .then((response)=>{this.props.sorting(response.data)})
           
       }
    
    render(){
        return(
        
            <React.Fragment>
            <div className="Sort-option"><h3>Sort</h3></div>
               <div onChange={this.SortingFilter}>
                    
                        <label className="radio">
                        <input type="radio" value="1" name="sort"/>Price low to high
                        </label>
                    
                        <label className="radio">
                        <input type="radio" value="-1" name="sort"/>Price high to low
                        </label>
                    </div>
                    </React.Fragment>
        )
    }
}
export default FilterSort;
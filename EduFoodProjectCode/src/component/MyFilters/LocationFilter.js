import React, { Component } from 'react';
import axios from 'axios';
 
var restrodetail = "http://localhost:8900/restauranthome";




    class LocationFilter extends Component{
        
    
         
        LocationHandler=(event)=>{
             
            var cityID=parseInt(event.target.value)
            var mealtypeID= parseInt(this.props.mealidnumber)
            var Url;

             if(cityID=="0"){
                Url=`${restrodetail}?city=${1}`
                
            }
            
            else if(cityID=="1"){
                Url=`${restrodetail}?city=${1}`
                
            }
            else if(cityID=="2"){
            
              Url=`${restrodetail}?city=${2}`
             
            }
            else if(cityID=="3"){
            
                Url=`${restrodetail}?city=${3}`
               
              }
              else if(cityID=="4"){
            
                Url=`${restrodetail}?city=${4}`
               
              }
              else if(cityID=="5"){
            
                Url=`${restrodetail}?city=${5}`
               
              }
              axios.get(Url)

      
              .then((response)=>{this.props.local(response.data)})
        
           
        }  

        
    render(){
        return(
        
            <React.Fragment>
                         <div className="Select-Location">Select Location </div><br/>
                                 <select className="select" onChange={this.LocationHandler}>
                                   <option value="0">Select the city🏰</option>
                                   <option value="1">Delhi</option>
                                   <option value="2">Mumbai</option>
                                   <option value="3">Pune</option>
                                   <option value="4">Bangalore</option>
                                   <option value="5">Chandigarh</option>
                                   
                                </select>
           </React.Fragment>
        )
    }

 
}
export default LocationFilter;
import React,{Component} from 'react';
import axios from 'axios';
import RestroDisplay from './RestroDetailsdisplay';
import CostFilter from './MyFilters/CostFilter';
import FilterCuisine from './MyFilters/FilterCuisine';
import FilterSort from './MyFilters/FilterSort';
import LocationFilter from "./MyFilters/LocationFilter.js"
import Pagination from "react-js-pagination";


import "bootstrap-less";



var restrodetail = "http://localhost:8900/restaurantlist";
var myrestrourl="http://localhost:8900/restauranthome";


        class Details extends Component{

            constructor(props){
                    
                super(props)

                      this.state={

                             citiesID: parseInt(sessionStorage.getItem('citiesID'))? parseInt(sessionStorage.getItem('citiesID')):1,
                                 
                                 restrolist:[],
        
                               }
                           }

            setDataPerlocation(sortedData){
              {this.setState({restrolist:sortedData})
         }}
                          
             setDataPerCuisine(sortedData){
             {this.setState({restrolist:sortedData})}
              }

    //method to call CostFilter. trying getting data from child and the data i am passing to restrolist. Data in child is recieved in function setcostingdata

             setDataPerCost(sortedData){
            {this.setState({restrolist:sortedData})}
            }
     
             setDataPerSort(sortedData){
              {this.setState({restrolist:sortedData})}
             }

      render(){
             return(

                <div> 
                   <div className="container-fluid">
                                
                      <div className="row">
                         
                              <div id="filterdiv" className="col-sm-3 col-md-3 col-lg-3">
                                       
                                <div className="Filters"><h3>Filters</h3></div>
                                  
      

                                    <LocationFilter local={(data)=>{this.setDataPerlocation(data)}} mealidnumber={this.props.match.params.id} />
                                    
                                
                                  <hr/>
                                              
                                     
                                   <FilterCuisine filtering={(data)=>{this.setDataPerCuisine(data)}} mealidnumber={this.props.match.params.id} citiesidnumber={this.state.citiesID}/>
                                       <hr/>
                            

                                    
                                   <CostFilter costing={(data)=>{this.setDataPerCost(data)}} mealidnumber={this.props.match.params.id} citiesidnumber={this.state.citiesID} />
                                        <hr/>


                                   <FilterSort sorting={(data)=>{this.setDataPerSort(data)}} mealidnumber={this.props.match.params.id} citiesidnumber={this.state.citiesID}/>
                                        <hr/>
                                        </div>
                        
                  
                                    
                                     <div className=" col-sm-9 col-md-9 col-lg-9">

                                       <RestroDisplay restrodata={this.state.restrolist}/>
                          
                                 </div>
                         </div>
                 </div>
                  
          </div>
                         
        )
    }

componentDidMount(){


          sessionStorage.setItem('mealtypeID',this.props.match.params.id)

          var mealtypeID= parseInt(this.props.match.params.id)
         
      
         console.log(`${restrodetail}/${this.state.citiesID}/${mealtypeID}`)

         axios.get(`${restrodetail}/${this.state.citiesID}/${mealtypeID}`)

       .then((response)=>{ 
           this.setState  ({restrolist:response.data})})

           axios.get(`${myrestrourl}/${this.state.citiesID}`)

           .then((response)=>{ 
               this.setState  ({restrolist:response.data})})


}   

}

export default Details;
import React,{Component} from 'react';
import {Link} from "react-router-dom";

var myurl="http://localhost:8900/location";

var myrestrourl="http://localhost:8900/restauranthome";


class Search extends Component{

    constructor(props){

        super(props)
         
        this.state= {
            
            
            location:"",
            city:"",
            restaurant:"",
            

        }
    }
     
    cityevent=(event)=>{
       
        this.setState({city:event.target.value})
         var cityID=parseInt(event.target.value)
         sessionStorage.setItem('citiesID',event.target.value)
         console.log(`${myrestrourl}?city=${cityID}`)
         fetch(`${myrestrourl}?city=${cityID}`,{method:'GET'})
         .then((res)=>res.json())
         .then((data)=>{
             this.setState({restaurant:data}) 
         })
    }

    renderCitylist= (data) => {
        if(data){
            return data.map((item,index)=>{
                return(
                    <option value={item.city} key={index}>
                           {item.name}      
                    </option>
                )
            })

        }
    }
    renderRestro=(data)=>{
        
        if(data){
            return data.map((item,index)=>{
                return(
                  
                    <option value={item._id} key={index}>   
                        {item.name}|{item.locality}
                    </option>
                 
                )
            })
       
        }
    }
    handlesearchrestro=(event)=>{

        this.props.restID(parseInt(event.target.value))

    }

    render(){

    return(
        <header>
          
              <div className="container-fluid">
                   <div className="conatiner">
                
                 

            
                    <div className="image-responsive">

                       <div className="row">

                    
                           <div id="logo">
                               <b id="e">e!</b>
                            </div>
                          
                    
                 
                   <div className="title">
                            <p>🍯🍇 Find the best restaurants,cafés and bars🍯🍇</p>
                   </div>
                   

                <div className="container-fluid">
                             
                        <div id="col-s-2"> </div>
                          <div className="locationselect col-s-8">
                   
                          <select className="dropdown" onChange={this.cityevent}>

                             <option className="nullvalue" value="0">Select city</option>
                              {this.renderCitylist(this.state.location)} 
                          

                         </select>
        
         
                <div className="search-box">
              
                     <select className="searchrestro"  onChange={this.handlesearchrestro}>

                         <option className="nullvalue" value="0">Select for the restaurant</option>
                           
                                 {this.renderRestro(this.state.restaurant)}
                     
                     </select>
               
               <div className="search-btn">

                       <Link to=' '>
                   
                       <i className="glyphicon glyphicon-search"></i>

                       </Link>

               </div>
               </div>
               </div>

       </div>
       </div>   

       </div>
                      </div> 
                      </div>
                       
                          
                           
                
            <hr/>
        </header>
    )
  }
  componentDidMount(){

    fetch(myurl,{method:"GET"})
    .then((res)=>res.json())
    .then((data) =>{
    this.setState({location:data})
    })

}
}
    
export default Search;
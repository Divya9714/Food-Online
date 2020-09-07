import React,{Component} from 'react';
import axios from 'axios'; 
import './RestaurantsDetails.css';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import 'react-tabs/style/react-tabs.css';//
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


var restrodetail = "http://localhost:8900/restaurantdetails";

class Restaurants extends Component {



    constructor(props){
        super(props)

        this.state={

            restro:" "
        }

    }
 
        Backbutton = (event)=>{

            var mealtypeID= parseInt(sessionStorage.getItem('mealtypeID'))

            this.props.history.push(`/details/${mealtypeID}`)

                }

                                      
  
    render(){
        
        var {restro}=this.state
        return(
            <div className="conatiner">
                <div className="container-fluid">
                    <div id="head" className="panel panel-button">
                         <div className="panel-heading">
                              <h2>{restro.name}</h2>  
                         </div>
                          
                          <div className="panel-body">
                        
                              <div className="row">

                              <div className="col-xs-2"></div>

                                  <div className="col-xs-8">
                                    
                                    
                               
                                  <Carousel className="pictures">
                                      
                                                      <div className="gallery">
                                                   <img className="img-responsive" src={restro.thumb1}/>
                                                      </div>
                                                     
                                                      <div className="gallery">
                                                   <img className="img-responsive" src={restro.thumb2}/>
                                                      </div>
                                                      <div className="gallery">
                                                   <img className="img-responsive" src={restro.thumb3}/>
                                                      </div>
                                           
                                      </Carousel>
                                     
                                      <br/>
                                  </div>
                                    <div className="col-xs-1"></div>
                                    <div className="col-xs-10">

                                   <h3 id="Rname">{restro.name}<span>&#x1F35C;</span></h3>

                                   <Tabs>
                                         <TabList className="nav nav-tabs">

                                   <Tab>

                                        <Link className="headline" to="#">Overview</Link>

                                   </Tab>

                                    <Tab>
                                           <Link className="headline" to="#">Content Us!!</Link>
                                    </Tab>

                                 </TabList>
 
                                     <TabPanel className="tab-content">

                                          <div id="overview">

                                              <h3>Overview</h3>
                                                <h4>City: {restro.city_name}</h4>
                                                <h4>Locality: {restro.locality}</h4>
                                                <h4>Cost: ₹{restro.cost} per two person</h4>
                                            
                                           <h3>No offers are accepted on weekends!!!!</h3>

                                         </div>
                                         
        
                                    </TabPanel>
    
                                  <TabPanel className="tab-content">
      
                                     <h3 className="call"><span>&#x1F4DE;</span> Contact us anytime!!</h3>
                                     <h4>Contact: ₹{restro.contact_number}</h4><br/>
                                     <h4>Address: <span>&#x1F369;</span>{restro.address} <span>&#x1F342;</span></h4>
  
                                  </TabPanel>
                            </Tabs>

                                    
                      </div>
                              </div>
                                   
                                   <br/><hr/>
                              <div className="row">
                                &nbsp; &nbsp;
                                <button className="btn btn-danger btn-lg" onClick={this.Backbutton}>Back</button> &nbsp; &nbsp;

                                <Link to={`/orderform/${this.props.match.params.id}`} class="btn btn-success btn-lg">Place order</Link>
                                   
                              </div>
                          </div>
                    </div>



                </div>


            </div>
        )
    }

    componentDidMount(){

     
      var restroID= parseInt(this.props.match.params.id)

      axios.get(`${restrodetail}/${restroID}`)

   .then((response)=>{this.setState({restro:response.data[0]})})
}   
}


export default Restaurants;

//no page to map as no need to  iterate any value so making direct display
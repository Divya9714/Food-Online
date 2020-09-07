import React,{Component} from 'react';
import axios from 'axios';
import ViewOrders from './ViewOrders';


var restOrders = "http://localhost:8900/ordershistory";

class OrderDisplayPage extends Component{
    constructor(){
        super()

        this.state={
            
            orders:''
        }
    }


      render(){
          return(
              <div>
                  <div className="container-fluid">
                      <div className="container">
                          <div>
                              <ViewOrders orderdata={this.state.orders}/>
                          </div>
                      </div>
                  </div>

              </div>
          )
      }



    componentDidMount(){

    axios.get(`${restOrders}`)
   .then((response)=>{this.setState({orders:response.data})})
} 

}

export default OrderDisplayPage;
import React,{Component} from 'react';

 var OrderUrl="http://localhost:8900/placeorder"



class Orders extends Component{

    constructor(props){
        super(props)

            this.state={
                
                    order_id: Math.floor(Math.random()*10000), //this order id is the value below//
                    name: '',
                    phone: '',
                    email: '',
                    address: '',
                    Restro_id: this.props.match.params.id,
                    person: '1'
                  
        
       }
   
    }


    handleName=(event) => {
        this.setState({name:event.target.value})
    }
    handlePhone=(event) => {
        this.setState({phone:event.target.value})
    }
    handleEmail=(event) => {
        this.setState({email:event.target.value})
    }
    handleAddress=(event) => {
        this.setState({address:event.target.value})
    }
    handlePerson=(event) => {
        this.setState({person:event.target.value})
    }

    handleSubmit=() => {
        var data = {
            "order_id":this.state.order_id,
            "name":this.state.name,
            "phone":this.state.phone,
            "email":this.state.email,
            "address":this.state.address,
            "rest_id":this.state.Restro_id,
            "person":this.state.person
        }
  
    
        fetch(OrderUrl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then((this.props.history.push('/orderdisplay')))

    }

     handlealert=()=>{

     alert("Your Order has been placed successfully🍜")
    }
    
    Cancelalert=()=>{
        alert("order cancelled")
        
    }
        handleCancel=() => {
            this.props.history.push('/')
        }
    
       
            

    render(){
        return(

            <div className="container-fluid">
                <div className="Container">
                    <div className="panel panel-success">
                        <div className="panel-heading">
                           <h3>Place Order</h3> 
                        </div>
                         
                            <div className="panel-body">

                                <div className="form-group">
                                    <label className="control-label"> Order ID: </label>

                                        <input type="text" name="order_id" className="form-control" placeholder="order ID"

                                         value={this.state.order_id}  readOnly/>

                                 </div>

                                <div className="form-group">
                                    <label className="control-label"> Restaurant ID: </label>
                                        <input type="text" name="Restro_id" className="form-control" placeholder=" Restaurant ID"

                                         value={this.state.Restro_id} readOnly/>
                                </div>

                                <div className="form-group">
                                    <label className="control-label"> Name: </label>
                                        <input type="text" name="name" className="form-control" placeholder="Enter you Name"

                                         value={this.state.name}  onChange={this.handleName} required/>
                                </div>

                                <div className="form-group">
                                    <label className="control-label"> Phone Number:</label>
                                        <input type="text" name="phone" className="form-control" placeholder="Enter Contact Number"

                                         value={this.state.phone} onChange={this.handlePhone} required/>
                                </div>

                                <div className="form-group">
                                    <label className="control-label"> Email ID: </label>
                                        <input type="email" name="email" className="form-control" placeholder="Enter Email ID"

                                         value={this.state.email} onChange={this.handleEmail} required/>
                                </div>

                                <div className="form-group">
                                    <label className="control-label"> Address: </label>
                                        <input type="text" name="address" className="form-control" placeholder=" Enter Address"

                                         value={this.state.address} onChange={this.handleAddress} required/>
                                </div>

                                
                                <div className="form-group">
                                    <label className="control-label"> Number Of Person: </label> 
                                    <select name="person" value={this.state.person} onChange={this.handlePerson}  className="form-control">
                                                
                                            <option value="0">Select Number of persons</option>
                                            <option value="1">1</option>
                                             <option value="2">2</option>
                                              <option value="3">3</option>
                                              <option value="4">4</option>
                                             <option value="5">5</option>
                                   </select>
                                        
                                </div>
                                   <hr/>
                                <div>
                                          <button  onClick={this.handleSubmit} onClickCapture={this.handlealert} className="btn btn-success">Confirm Order</button>
                                          &nbsp;&nbsp;&nbsp;
                                         

                                                                                        
                                         <button onClick={this.handleCancel} onClickCapture={this.Cancelalert} className="btn btn-danger">Cancel</button>
                            </div>
                               

                       </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Orders
    
  
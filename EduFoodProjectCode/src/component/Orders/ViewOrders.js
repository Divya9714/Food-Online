import React from 'react';



var ViewOrders =(props)=>{

    console.log(props)

   var renderOrderTable=({orderdata})=>
{
    if(orderdata){
        return orderdata.map((item)=>{
              
            return(

                <tr>
                       
                     
                      <td>{item.order_id}</td>
                      <td>{item.rest_id}</td>
                      <td>{item.name}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td>{item.address}</td>
                      <td>{item.person}</td>

                   
                     
                </tr>
            )
        })
    }
}


    return(
                                

        <div className="conatiner-fluid">
            
               <center><h3>ORDER HISTORY</h3></center>

                          <table className="table table-responsive">

                               <thead>
                                     <tr>
                                     
                                            <th>order_id</th>
                                            <th>rest_id</th>
                                            <th>name</th>
                                            <th>phone</th>
                                            <th>email</th>
                                            <th>address</th>
                                            <th>person</th>
                                            

               
                                     </tr>
                                </thead>  


                                 <tbody>
                                        {renderOrderTable(props)}    
                                 </tbody>
    
                           </table>

                
         </div>
    
         
  
    
    )
}
export default ViewOrders;
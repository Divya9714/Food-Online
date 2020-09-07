import React from "react";
import{BrowserRouter,Route} from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import Header from "./Header";
import Restaurants from "./RestraurantsDetails";
import Orders from './Orders/OrderForms';
import OrderDisplayPage from './Orders/OrderDisplayPage';


var Routing= () =>{
    return(
        <BrowserRouter>
        <div>
            <Header/>
            <Route exact path="/" component={Home}></Route>
            <Route path="/details/:id" component={Details}></Route>
            <Route path="/restro/:id" component={Restaurants}></Route>
            <Route path="/orderform/:id" component={Orders}></Route>
            <Route path="/orderdisplay" component={OrderDisplayPage}></Route>
        
              </div>
            </BrowserRouter>

    )
}
    
export default Routing;  


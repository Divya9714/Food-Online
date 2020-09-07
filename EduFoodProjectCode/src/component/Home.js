import React from 'react';
import Search from './Search';
import Footer from './Footer';
import QuickSearch from "./QuickSearch";
import Sound from "./Sound"


//FUNCTIONAL COMP.
var Home= (props) => {


    var handlesearchrestro=(data)=>{

        props.history.push(`/restro/${data}`)

    }

    return(
        <div>
           
            <Search restID={(data) => {handlesearchrestro(data)}} />
            <QuickSearch/>
            <br/>
            <hr/>
           
            <Footer year=" 2020"/>
        

        
        </div>
    )
}

export default Home;
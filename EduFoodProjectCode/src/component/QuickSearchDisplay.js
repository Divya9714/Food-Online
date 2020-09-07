import  React from 'react';
import {Link} from "react-router-dom";
import './QuickSearchDisplay.css'

var SearchDisplay=(props)=>{

    var listmeal=({mealdata})=>{

        if(mealdata){
            return mealdata.map((item,index)=>{
                return(
                   
                            <div className="meal" key={index}>
                        
                          <Link to={`/details/${item.mealtype}`}>
                            <div className="foodonline">
                            
                                  <img src={`/images/${item.name}.jpg`}/> 
                               </div>
                               </Link>    

                      <div className="typeofmeal">
                            <div className="whatfood">
                                      {item.name}🍹
                       </div>
                       <div className="mealexplaination">
                     Yummy and delicious {item.name} options for you 🍜 🍒
                       </div>
                  </div>
                  </div>
                

                    
                )
            
            })
        }
    }

    return(
        <div> 
<div className="container-fluid">

<div className="quicksearchcontainer">

        <p id ="searchheading">

        🍄Quick Searches🍄 <br/>      
        </p>

    <p id="subheading">
   
       🍔 Discover restaurants by type of meal 🍓😃

    </p>

    {listmeal(props)}

</div>
    
            
        

</div>
</div>


    
)
} 

export default SearchDisplay;
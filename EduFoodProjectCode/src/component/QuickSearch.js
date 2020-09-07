import React,{Component} from "react";
import QuickSearchDisplay from "./QuickSearchDisplay";

var quickmealurl="http://localhost:8900/mealtype";

class QuickSearch extends Component {
    constructor(){
        super()
        this.state={

            mealtype:"",
    
        }
    }
    render(){
        return(
            <div>
                <QuickSearchDisplay mealdata={this.state.mealtype}/>

                </div>
        
        )
    }


componentDidMount(){
    
   fetch(quickmealurl,{method:"GET"})
    .then((res)=>res.json())
    .then((data) =>{
        this.setState({mealtype:data})
    })
}

}
export default QuickSearch;
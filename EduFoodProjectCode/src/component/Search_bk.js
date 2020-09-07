import React,{Component} from 'react';

class Search extends Component{

    constructor(){

        super()
        console.log(">>inside constructor<<")
        
        this.state= {
            title:"React",
            keyword:"input",
            city:""

        }
    }
    eventhandler=(event)=>{
        this.setState({keyword:event.target.value?event.target.value:"user text"})
    }
    cityevent=(event)=>{
        this.setState({city:event.target.value})
    }
    
    render(){
        console.log(">>inside render<<")

    return(
        <header>
            <center>
                <h1>{this.state.title}</h1>
                <input type="text" onChange={this.eventhandler}/>
                <p>{this.state.keyword}</p>
                 <select onChange={this.cityevent}>
                     <option value="delhi">delhi</option>
                     <option value="mumbai">mumbai</option>
                     <option value="chandigarh">chandigarh</option>
                     
                 </select>
                 <p>Selected city is {this.state.city}</p>
                 
            </center>
            <hr/>
        </header>
    )
  }
  componentDidMount(){
  console.log(">>after render<<")
}
}
    
export default Search;
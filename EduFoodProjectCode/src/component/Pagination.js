import React,{Component} from 'react';
import axios from 'axios';
var restrodetail = "http://localhost:8900/restaurantlist";

class List extends Component {
    constructor(props){
        super(props);

        this.state = {

                restlist: [],
                limit: 1,  
                 page: 1,
                
               
            }
    }
  
    nextPage(event) {

       var end;
       var page=parseInt(event.target.value)
       if(end<page.length){
        this.setState({
           end: this.state.page + 1,
        })
    }}
    previousPage(event) {
        var start;
        var page=parseInt(event.target.value)
        if(start> 0) {
            this.setState({
               start: this.state.page-1,
            })
        }
    }


    render() {
        return (<div> 
      
            <div> 
                <button><div onChange={this.nextPage}> Previous Page </div></button>
                <button> <div onChange={this.previousPage}> Next Page </div></button>
            </div>
        </div>)
    }
}

export default List
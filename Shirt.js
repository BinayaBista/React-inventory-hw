
import React, {Component} from "react";
import './main.css';


class Shirt extends Component {
    constructor(props) {
    super(props);
    this.state = {
      
        count: this.props.countThree
    }

        this.add = this.add.bind(this);
        this.minus = this.minus.bind(this);
        this.reset = this.reset.bind(this);
    }
    
  ;
    add() {
        this.setState({
            count: this.state.count+1
        })
           console.log('count: ' ,this.state.count);
       }
   
       minus() {
           this.setState({
               count: this.state.count-1
           })
          
           console.log('count: ', this.state.count);
       }

       reeset() {
           this.setState({
               count: 0
           })
       }

       componentDidMount() {
           console.log("Mounted");
       }

       componentDidUpdate() {
           console.log("UPDATED");
       }
    
    render (){
       

        return (
            <div class = 'container'>
                <H1>Shirt:</H1>
                <h1>{this.state.count}</h1>
                <button onClick = {this.add}><h1> + </h1></button>
                <button onClick = {this.minus}> <h1> - </h1></button>
                <button onClick = {this.reset}>Reset</button>
            </div>
        )

    }

}

export default Shirt;
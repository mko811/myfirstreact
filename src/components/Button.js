import React from "react";

//class component - stateful component
class Button extends React.Component{

    constructor(){                  //  same as java, it also has a constructor first
        super()                     // need to call the super constructor
        this.state = {              // this is equal to a json object
            count : 0               // we want an increment each time we click the button
        }
    }

    addCounter = () => {                      // arrow function
        this.setState(
            {
                count : this.state.count + 1
            }
        )
    }

    render(){
        return (
            <div>
                <button onClick ={this.addCounter}>Click this button</button>
                <p>counts = {this.state.count}</p>
            </div>
        
        )
    }

}

export default Button
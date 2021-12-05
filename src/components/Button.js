import React from "react";

//class component - stateful component
class Button extends React.Component{

    constructor(){                  // same as java, it also has a constructor first
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

    resetCounter = () => {
        this.setState(
            {
                count : 0
            }
        )
    }

    render(){
        return (
            <html>
            <head>
                <style>
                    
                </style>
            </head>
            <body style={{background:"transparent", borderColor:"transparent"}}>
                <div>
                    <button onClick ={this.addCounter} 
                    style={{background:"transparent", borderColor:"transparent", borderRadius:"150px"}}

                    >
                        <img src ="https://www.pngall.com/wp-content/uploads/2016/07/Cookie-Download-PNG.png"/>
                    </button>
                    <br/>
                    <br/>
                    <button class="btn btn-outline-dark btn-lg btn-light" 
                    onClick ={this.resetCounter}>Empty Cookie Jar
                    </button>
                    <p class="fs-1"><b>{this.state.count}</b> cookies</p>
                </div>
            </body>
            </html>
        )
    }

}

export default Button
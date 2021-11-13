import { useEffect, useState } from "react";
import helloServices from "../services/helloServices";
// class - stateful function
// functions - stateless
// react - reactive
const Hello = () =>{

    // react hooks useState
    const[hello, setHello] = useState("API is down...") // inside this useState will be your defualt value when API is not ON

    // react hooks useEffect
    // axios - a tool for http request promises
    // promises - these are asynchronous processes 

    useEffect ( () => { // anonymous function
        helloServices.getHello()                             // this is the 'promise'
        .then(response => {                                  // then-catch is try-catch equivalent for promises
            setHello(response.data)
        })                                                
        .catch(err => {                                      // rejected promise
            console.log("something went wrong...")
        })
    }
    )

    return hello;
}

export default Hello
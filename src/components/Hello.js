import { useEffect, useState } from "react";
import helloServices from "../services/helloServices";

const Hello = () =>{

    // react hooks useState
    const[hello, setHello] = useState("")

    // react hooks useEffect
    // axios - a tool for http request promises
    // promises - these are asynchronous processes 

    useEffect ( () => {
        helloServices.getHello()
        .then(response => {                                  // try-catch equivalent for promises
            setHello(response.data)
        })                                                
        .catch(err => {
            console.log("something went wrong...")
        })
    }
    )

    return hello;
}

export default Hello
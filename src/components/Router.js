import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./Employee";
import Home from "./Home";
import AddEmployee from "./AddEmployee";
import PageNotFound from "./PageNotFound";

const Router = () =>{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element ={<Home/>}/>
                    <Route exact path="/employees" element ={<Employee/>}/>
                    <Route exact path="/add" element ={<AddEmployee/>}/>
                    <Route exact path="/edit/:employee_ID" element ={<AddEmployee/>}/>
                    <Route exact path="*" element ={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;
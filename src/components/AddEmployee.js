import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import employeeService from "../services/employeeService";

const AddEmployee = () =>{

    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [department, setDepartment] = useState("")
    const {employee_ID} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
            if(employee_ID){
                employeeService.getEmployee(employee_ID) // promise
            .then(employee => {
                setName(employee.data.name);
                setLocation(employee.data.location);
                setDepartment(employee.data.department);
                }
            )
            .catch(error =>{
                    console.error("error")
                }
            )
            }   
        },[])

    const saveEmployee = (e) =>{
        e.preventDefault();
        
        if(employee_ID){
            //update
            const employee = {employee_ID, name, location, department};
            employeeService.putEmployee(employee)                 // promise
            .then(
                response => {
                    console.log("updated employee!", response.data)
                    navigate("/employees")
                }
            )
            .catch(
                error => {
                    console.error("something went wrong...")
                }
            )
        }
        else{
        //add employee
            const employee = {name, location, department};
            employeeService.postEmployee(employee)                 // promise
            .then(
                response => {
                    console.log("added new employee!", response.data)
                    navigate("/employees")
                }
            )
            .catch(
                error => {
                    console.error("something went wrong...")
                }
            )
        }
    }

    return (
        <div className="container">
            <h3>Add/Edit employee</h3>
            <form>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input 
                    type="text" 
                    className="form-control"
                    value={name}
                    id="name" 
                    placeholder="Add employee name"
                    onChange={
                        (e) =>{
                            setName(e.target.value)
                        }
                    } 
                    />
                </div>
                <div className="mb-3">
                    <label for="location" className="form-label">Location</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    value={location}
                    id="location" 
                    placeholder="Add employee location"
                    onChange={
                        (e) =>{
                            setLocation(e.target.value)
                        }
                    } 
                    />
                </div>
                <div className="mb-3">
                    <label for="department" className="form-label">Department</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    value={department}
                    id="department" 
                    placeholder="Add employee department"
                    onChange={
                        (e) =>{
                            setDepartment(e.target.value)
                        }
                    } 
                    />
                </div>
                <button type="submit" className="btn btn-success" onClick={(e) => saveEmployee(e)}>Save employee</button>
            </form>

        </div>
    )
}

export default AddEmployee;
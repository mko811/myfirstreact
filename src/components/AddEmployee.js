import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import employeeService from "../services/employeeService";

const AddEmployee = () =>{

    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [department, setDepartment] = useState("")
    const {employee_ID} = useParams();
    const navigate = useNavigate();
    const [number, setNumber] = useState(""); // 1. Note, no space between the quotes
    const [error, setError] = useState(""); // 2. Track the error in the input


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

    const saveEmployee = (e) => {
        e.preventDefault();

        if (name && location && department) {
            setError('');

            //update an existing eployee 
            if (employee_ID) {

                const employee = { employee_ID, name, location, department };
                employeeService.putEmployee(employee)                 // promise
                    .then(
                        response => {
                            console.log("updated employee!", response.data)
                            navigate("/myfirstreact/employees")
                            //navigate("/employees")
                        }
                    )
                    .catch(
                        error => {
                            console.error("something went wrong...")
                        }
                    )
            }
            //adds a new employee
            else {
                const employee = { name, location, department };
                employeeService.postEmployee(employee)                 // promise
                    .then(
                        response => {
                            console.log("added new employee!", response.data)
                            navigate("/myfirstreact/employees")
                            //navigate("/employees")
                        }
                    )
                    .catch(
                        error => {
                            console.error("something went wrong...")
                        }
                    )
            }
        }

        else {
            console.error('All fields not filled')
            setError('Please fill up all fields.')
        }

    }
    
    return (
        <div className="container">
            <h3>Add/Edit employee</h3>

            <form className="needs-validation" novalidate>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={name} placeholder="Employee's name"
                        onChange={
                            (e) => {
                                setName(e.target.value)
                            }
                        }
                    />
                </div>
                <div className="mb-3">
                    <label for="location" className="form-label">Location</label>
                    <input type="text" className="form-control" id="location" value={location} placeholder="Employee's location"
                        onChange={
                            (e) => {
                                setLocation(e.target.value)
                            }
                        }
                    />
                </div>
                <div className="mb-3">
                    <label for="department" className="form-label">Department</label>
                    <div className="input-group has-validation">
                        <input type="text" className="form-control" id="department" value={department} placeholder="Employee's department"
                            onChange={
                                (e) => {
                                    setDepartment(e.target.value)
                                }
                            }
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <button id="btnSubmit" className="btn btn-success" type="button"
                        onClick={(e) => saveEmployee(e)} >
                        Save Employee
                    </button>
                   
                    <p id="error"> <br/> {error && <p style={{color:"red"}} className="error">{error}</p>}</p>
                </div>
            </form>
        </div>
    )
}

export default AddEmployee;
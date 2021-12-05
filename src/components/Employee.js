import { useEffect, useState } from "react"
import EmployeeService from "../services/employeeService"

const Employee = () => {

    const [employees, setEmployees] = useState([])                         // useState Hooks 
        // employees is our main variable - information of all the employees

    useEffect(
        () => {
            EmployeeService.getEmployees() // promise - asynchronous processes in JS
            .then(
                response =>{
                    setEmployees(response.data)                             // setEmployees is what fills up employees variable
                }
            )
            .catch(
                () => {
                    console.log("Sorry, not available :(")
                }
            )
        }
    )

    return (                                                                // jsx - we return a table with the data of employees table
        <div>
            <h1>List of Employees</h1>
            <div>
                <table className="table table-striped table-hover table-striped">
                    <thead>
                        <tr className="table-success">
                            <td>Department</td>
                            <td>Location</td>
                            <td>Name</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        employees.map(
                            employee => (
                                <tr>
                                    <td>{employee.department}</td>
                                    <td>{employee.location}</td>
                                    <td>{employee.name}</td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Employee
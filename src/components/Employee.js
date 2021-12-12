import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import employeeService from "../services/employeeService"
import EmployeeService from "../services/employeeService"

const Employee = () => {

    const [employees, setEmployees] = useState([])                         // useState Hooks 
    // employees is our main variable - information of all the employees

    useEffect(
        () => {
            refreshEmployeeTable();
        }
    )


    const refreshEmployeeTable = () => {
        employeeService.getEmployees() // promise - asynchronous processes in JS
            .then(
                response => {
                    setEmployees(response.data)                             // setEmployees is what fills up employees variable
                }
            )
            .catch(
                () => {
                    console.log("Sorry, not available :(")
                }
            )
    }

    const deleteEmployee = (employee_ID) => {
        employeeService.deleteEmployee(employee_ID)
            .then(
                response => {
                    console.log("successfully deleted employee record")
                    refreshEmployeeTable();
                }
            )
            .catch(
                error => {
                    console.error("something went wrong...", error)
                }
            )
    }

    return (                                                                // jsx - we return a table with the data of employees table
        <div>
            <h1>List of Employees</h1>
            <div>
                <table>
                    <thead>
                        <tr className="table-success">
                            <td style={{width:"30%"}}>Department</td>
                            <td style={{width:"30%"}}>Location</td>
                            <td style={{width:"30%"}}>Name</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(
                                employee => (
                                    <tr key={employee.employee_ID}>
                                        <td>{employee.department}</td>
                                        <td>{employee.location}</td>
                                        <td>{employee.name}</td>
                                        <td>
                                            <div className="d-grid gap-4 d-md-flex mx-auto">
                                                <Link className="btn btn-info" to={`/edit/${employee.employee_ID}`}>Update</Link>
                                                <button className="btn btn-danger" onClick={(e) => deleteEmployee(employee.employee_ID)}>Delete</button>
                                            </div>
                                        </td>
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
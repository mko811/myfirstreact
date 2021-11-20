import { useEffect, useState } from "react"
import EmployeeService from "../services/employeeService"

const Employee = () => {
    const [employees, setEmployees] = useState([])

    useEffect(
        () => {
            EmployeeService.getEmployees() // promise
            .then(
                response =>{
                    setEmployees(response.data)
                }
            )
            .catch(
                () => {
                    console.log("Sorry, not available :(")
                }
            )
        }
    )

    return (                                                                // jsx - we return a table instead
        <div>
            <h1>List of Employees</h1>
            <div>
                <table border = "1">
                    <tr>
                        <td>Department</td>
                        <td>Location</td>
                        <td>Name</td>
                    </tr>
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
                </table>
            </div>
        </div>
    )
}

export default Employee
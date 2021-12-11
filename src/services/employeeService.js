import httpclient from "../commons/httpclient"

const getEmployees = () => {
    return httpclient.get('/employees');
} 

const postEmployee = (data) => {
    return httpclient.post('/employees', data);
}

const putEmployee = (data) => {
    return httpclient.put('/employees', data);
}

const getEmployee = (employee_ID) => {
    return httpclient.get(`/employees/${employee_ID}`);
} 

const deleteEmployee = (employee_ID) => {
    return httpclient.delete(`/employees/${employee_ID}`);
}

export default {getEmployees, postEmployee, putEmployee, getEmployee, deleteEmployee}
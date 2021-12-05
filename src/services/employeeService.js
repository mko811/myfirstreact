import httpclient from "../commons/httpclient"

const getEmployees = () => {
    return httpclient.get('/employees');
} 

// const postEmployees = () => {
//     return httpclient.post('/employees', data);
// }

export default {getEmployees}
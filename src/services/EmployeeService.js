import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "https://darling-qhoi.onrender.com";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL+'/'+"getAll");
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL+'/'+"saveemployee", employee);
    }

    getEmployeeById(employeeId){
        return axios.get(`${EMPLOYEE_API_BASE_URL}/getById/${employeeId}`);

    }

    updateEmployee(employee, employeeId){
        employee.id = employeeId;
        return axios.put(EMPLOYEE_API_BASE_URL+'/'+"updateEmployee", employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(`${EMPLOYEE_API_BASE_URL}/deleteById/${employeeId}`);
    }
}

export default new EmployeeService()

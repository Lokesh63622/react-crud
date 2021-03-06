import { useRoutes } from "react-router-dom";
import Employees from './../components/Employees';
import DeleteEmp from './../components/DeleteEmp';
import EditEmp from './../components/EditEmp';
import Employee from "../components/Employee";
import PageNotFound from "../components/PageNotFound";
import CreateEmp from './../components/CreateEmp';
let EmpRoute=()=> {
    let EMP_ROUTES=useRoutes([
        {
            path:"",
            element:<Employees/>
        },
        {
            path:"create-emp",
            element:<CreateEmp />
        },
        {
            path:"delete-emp/:id",
            element:<DeleteEmp/>
        },
        {
            path:"edit-emp/:id",
            element:<EditEmp />
        },
        {
            path:"emp/:id",
            element:<Employee />
        },
        {
            path:"*",
            element:<PageNotFound />
        }
    ])
    return EMP_ROUTES
}
export default EmpRoute
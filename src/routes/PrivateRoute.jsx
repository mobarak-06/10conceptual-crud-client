import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../components/useAuth";

const PrivateRoute = ({children}) => {
    const {users} = useAuth();
    const location = useLocation();
    console.log(location);
   
    if (users) {
        return children
    }
    return <Navigate state={location.pathname} to="/signIn"></Navigate>
};

export default PrivateRoute;
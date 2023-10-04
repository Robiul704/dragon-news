import { useContext } from "react";
import { authcontext } from "./Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const Privateroute = ({children}) => {
    const {user,loading}=useContext(authcontext)
    const location=useLocation()

    if(loading){
        return <p></p>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default Privateroute;
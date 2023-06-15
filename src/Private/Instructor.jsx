import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../Provider/AuthProvider";


const InstructorOnly = ({children}) => {
    const { loading, user } = useContext(AuthContext);
    const {isLoading, role} = useAuthorization()
    const location = useLocation();
    if(loading || isLoading){
        return <h2>Loading</h2>
    }

    if(user.email && role === "instructor"){
        return children;
    }
    return <Navigate state={{from: location}} to="/" replace/>;
};

export default InstructorOnly;
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { RotatingLines } from 'react-loader-spinner';
import Swal from "sweetalert2";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return  <RotatingLines
        strokeColor="purple"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    } 

    console.log('hi im in private route', user)

if(user){
        return children;
    }
    else{
        Swal.fire({
            position: 'center',
            title: "Error!",
            text: "Please Login First",
            icon: "error",
            showConfirmButton: false,
            timer: 1500
            });
    }
    return  <Navigate state={{from: location }} to='/login' replace></Navigate>
};

export default PrivateRoutes;
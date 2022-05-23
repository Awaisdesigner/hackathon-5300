import React from 'react';
import "./LogOut.css"
import { useDispatch } from "react-redux";
import { doLogOut } from "../../store/action/AuthAction"



function LogOut() {
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(doLogOut());
    }
    return (
        <div className='maincontainer'>

            <div className="flex-Container">
                <div className='box1'>
                    <p>Are you ready Logout account </p>
                    <button onClick={logOut}>LOGOUT</button>
                   
                    {/* {alert("USER LOGOUT")} */}
                </div>
            </div>




            {/* alter(
           " please click button then logout user"
            // {<button onClick={logOut} style={{}}>LogOut</button>}
            ) */}
        </div>
    );
}

export default LogOut;
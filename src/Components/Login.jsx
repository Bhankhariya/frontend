import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import { useAuth } from '../store/auth';
import Navbar from './Navbar';
import { toast } from 'react-toastify';


function Login() {

    const [user,setuser] = useState({
        email:"",
        password:"",
    });

    const navigate = useNavigate();
    const {storeTokenInLS} = useAuth();

    const handleinput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        
        setuser({
            ...user,
            [name]:value,
        })
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch(`https://backend-coral-phi.vercel.app/api/auth/login`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(user),
            });
            console.log("login",response);

            const res_data = await response.json();
            
            if(response.ok){
                storeTokenInLS(res_data.token);
                
                setuser({email:"", password:""});
                
                toast.success("Login Successful");
                navigate("/");
            }else{
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
                // console.log("invalid credential");
            }

        } catch (error) {
            console.log(error);
        }

    }

    return ( 
        <>
        <Navbar />
        <div class="loginbody">
        <div class="login-container">
            <h2>Login</h2>
        <form class="login-form" action='http://localhost:8560/register' method='post' onSubmit={handleSubmit}>
            
            <label for="email">Useremail:</label>
            <input type="email" id="useremail" name="email" value={user.email} onChange={handleinput} autoComplete="off" required />

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" value={user.password} onChange={handleinput} required />

            <input className="button" type="submit" value="Aunty's Kitchen Key"></input>
        </form>
        <div class="forreg">
            <Link to='/Register'>New Registration</Link>
            <Link to='/'>Forgot Password</Link>
        </div>
        </div>
    </div>
        </>
     );
}

export default Login;
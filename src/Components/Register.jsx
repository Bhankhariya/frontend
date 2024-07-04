import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import Navbar from "./Navbar";
import { toast } from 'react-toastify';


export const Register = () => {
  const [user, setuser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleinput = (e) => {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setuser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`https://backgame.vercel.app/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      
      // console.log(response);
      
      const res_data = await response.json();
      console.log("res to ser", res_data.extraDetails);
      
      if (response.ok) {
        storeTokenInLS(res_data.token);
        
        setuser({ username: "", email: "", password: "" });
        
        toast.success("Registration Successful");
        navigate("/");
      }else{
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <>
      <Navbar />
      <div class="loginbody">
        <div class="login-container">
          <h2>New User Registration</h2>
          <form class="login-form" onSubmit={handleSubmit}>
            <label for="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={handleinput}
              required
            />

            <label for="useremail">Useremail:</label>
            <input
              type="email"
              id="useremail"
              name="email"
              value={user.email}
              onChange={handleinput}
              required
            />

            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleinput}
              required
            />

            {/* <label for="password">Confirm Password:</label>
            <input type="password" id="cpassword" name="cpassword" required /> */}

            <input
              className="button"
              type="submit"
              value="Enroll for Tiffin Delights"
            ></input>
          </form>
          <div class="forreg">
            <Link to="/Login">Already Login</Link>
            <Link to="/">Forgot Password</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

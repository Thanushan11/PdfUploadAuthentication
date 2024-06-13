import './Signup.css'
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"
import axios from 'axios'


export const Signup = () => {
    const[error,setError]=useState()
    const[data,setData] =useState({
        Name:"",
        Email:"",
        Password:""
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    const handleSubmit =async (e)=>{
            e.preventDefault();
            try {
                const url ="http://localhost:8080/api/users"
                const {data:res} =await axios.post(url,data)
                navigate('/login');
                console.log(res.message);
            } catch (error) {
                if (error.response && error.response.status>=400 && error.response.status <= 500){
                    setError(error.response.data.message)
                }
                
            }
            
    }
  return (
    <div className="signup">
        <div className="signup-container">
            <div className="signup-container-left">
                    <Link to="/login">
                        <button className="signup-container-login-Button">
                            Sign in
                        </button>
                    </Link>
            </div>
            <div className="signup-container-right">
               <form action="" className="signup-container-form" onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                <input type="text"  placeholder="Name" name="Name" value={data.Name} required onChange={handleChange}/>
                <input type="text"  placeholder="Email" name="Email" value={data.Email} required onChange={handleChange}/>
                <input type="Password"  placeholder="Password" name="Password" value={data.Password} required onChange={handleChange}/>
                {error&& <div className="signup-container-form-error"> {error}</div>}
                <button className="signup-container-Button" type="submit" onSubmit={handleSubmit}>Signup</button>
               </form>
            </div>

        </div>
    </div>
  )
}

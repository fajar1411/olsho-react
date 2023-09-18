import React, { useState } from 'react';
import '../../../assets/css/project.css';
import Logos from '../../../assets/image/imgregis/BeliKuy.png';
import Google from '../../../assets/image/imgregis/google.png';
import { datauser } from "../../../datauser/datauser.js";
import { useNavigate } from "react-router-dom";
function ContentLogin() {

    const navigate = useNavigate();

    
    const [formValues, setFormValues] = useState({
      email: '',
      password: '',
    });

   
   
    const handleInputChange = (event) => {
      event.preventDefault();
      var {name,value} = event.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });
    };



    const handleSubmit = (e)  => {
      e.preventDefault();
      var { email, password } = document.forms[0];
      setFormValues({
        ...formValues,
        [email]: email.value,
        [password]:password.value,
      });
     
      const userData = datauser.find((user) => user.email === email.value );
      
      if (userData) {
        if(email.value !== userData.email   || password.value !== userData.password || userData.email===false) {
          alert("Your account  is incorrect, please try again")   
          return
        } else {
          localStorage.setItem("email", email.value )
          localStorage.setItem( "password",password.value)
          navigate("/app")
          return  ;
        }
      } 
    };
    
    

  return (
    
    <div  id= "content">
        <form className='content login' onSubmit={handleSubmit} >
        <img className='logolgn' src={Logos}alt="logo" />
        <h1>Login</h1>
          <input
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              className="login-input"
              onChange={handleInputChange}
              required
            />
             {/* {renderErrorMessage(formValues.email)} */}
            <input
              type="password"
              name="password"
              value={formValues.password}
              placeholder="Password"
              onChange={handleInputChange}
              className="login-input"
              required
             
            /> 
            {/* {renderErrorMessage(formValues.password)} */}
            <br />
            <br />
            <button type='submit'  
              className={formValues.email !== "" && formValues.password !== "" ? "btn-login" :  "btn-login-disabled"}  
            >
              Login
            </button>
            
            <button className="btn-google"> Google  <img className='img-gg'src={Google} alt="google"/> </button>
        </form>
    </div>
  );
}

export default ContentLogin;
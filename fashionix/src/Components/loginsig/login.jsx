import React from 'react'
import "./Login.css";
const Login = () => {
  return (
    <div 
    className="mainDiv">
        <div
         className="innerDiv1"
        >
            <h5 >LOG IN TO YOUR ACCOUNT</h5>
            <input 
            className="form-Input"
            placeholder='E-MAIL'/>
            <br />
            <input 
            className="form-Input"
            placeholder='PASSWORD'/>
            <br />
            <button
            className="loginButton"
            style={{width:"100%",padding:"10px",background:"black",color:"white",cursor:"pointer"}}
            >LOGIN</button>
            <p>Have you forgotten your password?</p>
             </div>
        <div
        className="innerDiv2"
        >
            <h5>NEED AN ACCOUNT?</h5>
            <button
            style={{width:"100%",padding:"10px",border:"1px solid black",cursor:"pointer",marginTop:"10px"}}
            >REGISTER</button>
        </div>
    </div>
  )
}
export default Login;
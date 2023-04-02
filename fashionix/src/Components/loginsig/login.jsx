import React, { useState } from 'react'
import "./Login.css";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const [state,setState]=useState({
    email:"",
    password:""
  })
  let[err,setErr]=useState("")

  const handelChange=(e)=>{
    setState({...state,[e.target.name]:e.target.value})
  }
let nav=useNavigate("")


const HandelSubmit=(e)=>{
e.preventDefault();
if(!state.email||!state.password){

  // alert("")
  return
}

signInWithEmailAndPassword(auth,state.email,state.password).then((res)=>{
  console.log(res)
}).catch((err)=>{
  console.log(err)
})

}



  return (
    <div 
    className="mainDiv">
        <div
         className="innerDiv1"
        >
          <form action="" onSubmit={HandelSubmit}>
            <h5 >LOG IN TO YOUR ACCOUNT</h5>
            <input 
            className="form-Input"
            placeholder='E-MAIL'
            name="email"
            value={state.email}
            onChange={handelChange}
            />
            <br />
            <input 
            className="form-Input"
            placeholder='PASSWORD'
            name="password"
            value={state.password}
            onChange={handelChange}
            />
            <br />
            <button
            className="loginButton"
            style={{width:"100%",padding:"10px",background:"black",color:"white",cursor:"pointer"}}
            >LOGIN</button>
            <p>Have you forgotten your password?</p>
            </form>
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

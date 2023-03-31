import React, { useEffect, useState } from 'react'
import "./register.css";
import { createUserWithEmailAndPassword ,updateProfile} from 'firebase/auth';
import { auth } from '../../firebase';
export const Register = () => {
 const [disables,setDisabled]=useState(false);
  const [setAll,setSetAll]=useState({
    name:"",
    email:"",
    password:"",
    repeat:""
  })
 const [err,setErr]=useState("")
 const handelChange=(e)=>{
  setSetAll({...setAll,[e.target.name]:e.target.value})
 }

console.log(setAll)
 const handelClick=(e)=>{
  e.preventDefault("")

  if(!setAll.name||!setAll.email||!setAll.password){
    setErr ("Please Fill All The Credentials")
     return
  } 
  if(setAll.password!==setAll.repeat){
    setErr("Please provide password and repeat password same")
    return
  }
 setErr("")
 setDisabled(true)
 createUserWithEmailAndPassword(auth,setAll.email,setAll.name,setAll.password).then((res)=>{
  setDisabled(false)
  const user=res.user
  updateProfile(user,{
    displayName:setAll.name
  })

 }).catch((err)=>{
  setDisabled(false)
  console.log(err)})
  setSetAll({
    name:"",
    email:"",
    password:"",
    repeat:""
  })
 }


  const [windowSize, setWindowSize] = useState(getWindowSize());
  // let nav=useNavigate()
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
  
  return (
    <>
    {windowSize.innerWidth>760?<div 
      className="mainDivRegister">
          <div
           className="innerDiv1register"
           
          >
              <h5 >PERSONAL DETAILS</h5>
              <form action="" onSubmit={handelClick}>
              <input 
              type="email"
              name="email"
              className="form-Inputregister"
              placeholder='E-MAIL' required
              onChange={handelChange}
              />
             
              <br />
              <input 
              type="password"
              name="password"
              className="form-Inputregister"
              placeholder='PASSWORD'
              onChange={handelChange}
              required/>
              <br />
              <input 
              type="text"
              name="name"
              className="form-Inputregister"
              placeholder='NAME'
              onChange={handelChange}
              />
              <br />
              <input className='cehckboxspanned' type="checkbox" />
              <label className='cehckboxspanned' htmlFor="">I wish to receive Zara news on my e-mail</label>
              <br />
              <input className='cehckboxspanned'  type="checkbox" />
              <label  className='cehckboxspanned' htmlFor="">I accept the privacy statement</label>
              <button
              type='submit'
              className="loginButtonregister"
              style={{width:"100%",padding:"10px",cursor:"pointer"}}
              >CREATE ACCOUNT</button>
              </form>
               </div>
          <div
          className="innerDiv2register"
          >
             <input  className="form-Inputregister" name="repeat" onChange={handelChange} type="text" placeholder='REPEAT PASSWORD' />
          </div>
      </div>:<div 
      className="mainDivRegister">
          <div
           className="innerDiv1register"
          >
              <h5 >PERSONAL DETAILS</h5>
              <form action="">
              <input 
              className="form-Inputregister"
              placeholder='E-MAIL' required/>
               onChange={handelChange}
              <br />
              <input 
              className="form-Inputregister"
              placeholder='PASSWORD'
              onChange={handelChange}
              required/>
              <br />
              <input  className="form-Inputregister" type="text" placeholder='REPEAT PASSWORD' />
              <br />
              <input 
              className="form-Inputregister"
              placeholder='NAME'
              onChange={handelChange}
              />
              <br />
              <input className='cehckboxspanned' type="checkbox" />
              <label className='cehckboxspanned' htmlFor="">I wish to receive Zara news on my e-mail</label>
              <br />
              <input className='cehckboxspanned'  type="checkbox" />
              <label  className='cehckboxspanned' htmlFor="">I accept the privacy statement</label>
              <button
              type='submit'
              className="loginButtonregister"
              style={{width:"100%",padding:"10px",cursor:"pointer"}}
              >CREATE ACCOUNT</button>
              </form>
               </div>
     
      </div>}
      </>
  )
}

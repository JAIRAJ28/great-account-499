import React from 'react'
import "./register.css"
export const Register = () => {
  return (
    <div 
    className="mainDivRegister">
        <div
         className="innerDiv1register"
        >
            <h5 >PERSONAL DETAILS</h5>
            <input 
            className="form-Inputregister"
            placeholder='E-MAIL'/>
            <br />
            <input 
            className="form-Inputregister"
            placeholder='PASSWORD'/>
            <br />
            <input 
            className="form-Inputregister"
            placeholder='NAME'/>
            <br />
            <input className='cehckboxspanned' type="checkbox" />
            <label className='cehckboxspanned' htmlFor="">I wish to receive Zara news on my e-mail</label>
            <br />
            <input className='cehckboxspanned'  type="checkbox" />
            <label  className='cehckboxspanned' htmlFor="">I accept the privacy statement</label>
            <button
            className="loginButtonregister"
            style={{width:"100%",padding:"10px",cursor:"pointer"}}
            >CREATE ACCOUNT</button>
            
             </div>
        <div
        className="innerDiv2register"
        >
           <input  className="form-Inputregister" type="text" placeholder='REPEAT PASSWORD' />
        </div>
    </div>
  )
}

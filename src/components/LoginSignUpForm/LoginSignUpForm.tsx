import React from 'react'
import {AiOutlineClose} from 'react-icons/ai';
function LoginSignUpForm() {
  return (
    <div className='overlay'>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
       <div className='form'>
          <div style={{display:"flex",width:"347px",justifyContent:"space-between"}}>
              <div>
                  <AiOutlineClose style={{cursor:"pointer"}}/>
              </div>
              <p className='login-text-popup'>Log in or sign up</p>
          </div>
          <div style={{background:"#f5f5f5",width:"111%",height:"2px",position:"relative",right:"29px",bottom:"20px"}}/>
        <p className='heading-form-text'>Welcome to AirBnb</p>
    
      </div>
    </div>
       
    </div>
  )
}

export default LoginSignUpForm
import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import {MdOutlineArrowBackIosNew} from 'react-icons/md';
interface Props {
    setShowOptions: (x: boolean) => void
}
function SignUpForm({setShowOptions}:Props) {

const validationSchema = yup.object({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    birthdate: yup.date()
    .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
    .required("Required"),
    password:yup.string()
    .required('No password provided.') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      birthdate:'',
      password:''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
          <div style={{ display: "flex", width: "347px", justifyContent: "space-between" }}>
                <div>
                    <MdOutlineArrowBackIosNew onClick={()=>setShowOptions(false)} style={{ cursor: "pointer" }} />
                </div>
                <p className='login-text-popup'>Finish signing up</p>
            </div>
            <div style={{ background: "#f5f5f5", width: "111%", height: "2px", position: "relative", right: "29px", bottom: "20px" }} />
        <div style={{marginTop:"20px"}}>
            <div style={{marginTop:"20px"}}>
            <input
               type="text"
               id="firstName"
               name="firstName"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.firstName}
               className='input-form' placeholder='First Name' />
               {formik.touched.firstName && formik.errors.firstName ? (
          <small className='error-color'>{formik.errors.firstName}</small>
        ) :         <span style={{fontSize:"11px",color:"#aeaeae",float:"left"}}>Make sure it matches the name on your government ID.</span>
    }
            </div>
      
        <div style={{marginTop:"20px"}}>
        <input 
         type="text"
         id="lastName"
         name="lastName"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.lastName}
     className='input-form' placeholder='Last Name' />
      {formik.touched.lastName && formik.errors.lastName ? (
          <small className='error-color'>{formik.errors.lastName}</small>
        ) :         <span style={{fontSize:"11px",color:"#aeaeae",float:"left"}}>Make sure it matches the name on your government ID.</span>
    }
        </div>
    

        </div>
        <div style={{marginTop:"20px"}}>
       <input
       id="birthdate"
       name="birthdate"
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.birthdate}
       
       type="date" className='input-form' />
        {formik.touched.birthdate && formik.errors.birthdate ? (
          <small className='error-color'>{formik.errors.birthdate}</small>
        ) :        <small style={{fontSize:"11px",color:"#aeaeae"}}>To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use Airbnb</small>
    }
       </div>
       <div style={{marginTop:"20px"}}>
       <input 
        id="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
       type="email" className='input-form' placeholder='Email' />
        {formik.touched.email && formik.errors.email ? (
          <small className='error-color'>{formik.errors.email}</small>
        ) :         <small style={{fontSize:"11px",color:"#aeaeae",float:"left"}}>We'll email you trip confirmations and receipts.</small>
    }
       </div>
       <div style={{marginTop:"20px"}}>
       <input
        id="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
       type="password" className='input-form' placeholder='Password' />
       {formik.touched.password && formik.errors.password ? (
          <small className='error-color'>{formik.errors.password}</small>
        ) : null}
       </div>
       <button className='continue-button'>Agree and Continue</button>
    </form>
  )
}

export default SignUpForm
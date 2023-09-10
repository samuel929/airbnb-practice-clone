import React from 'react';
import {BiLogoAirbnb} from 'react-icons/bi';
import {BiSearch} from 'react-icons/bi';
import {BsGlobe} from "react-icons/bs";
import {RxHamburgerMenu} from "react-icons/rx";
import {FaUserCircle} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { open} from '../../Slices/popup';
import LoginPopup from './popup/loginPopup';
import LoginSignUpForm from '../LoginSignUpForm/LoginSignUpForm';
function Header() {

    const dispatch = useDispatch();
    const openLoginPopup = useSelector((state: RootState) => state.popup);
  return (
    <div className='header-flex-container'>
         <div className='flex'>
         <BiLogoAirbnb color='#ff385c' fontSize={50}/> <p className="logo-text-color"> Airbnb</p> 
         </div>
         <div>
            <div className='nav-container'>
                <div style={{padding:"10px"}}>
                    <span className='nav-search-font-size'>Anywhere</span>
                </div>
                 <div className='border-search-line'/>
                <div style={{padding:"10px"}}>
                    <span className='nav-search-font-size'>Any Week</span>
                </div>
                <div className='border-search-line'/>
                <div style={{padding:"10px"}} className='flex'>
                    <span className='add-guest-text'>Add guest</span>
                    <div style={{background:"#ff385c",borderRadius:"360px",height:"30px",width:"30px",position:"relative",bottom:"4px",left:"10px"}}><BiSearch color='white' className='search-icon' fontSize={20}/></div>
                </div>
            </div>
         </div>
         <div style={{display:"flex",justifyContent:"space-between",width:"300px"}}>
             <div>
                <p style={{cursor:"pointer"}}>Airbnb your home</p>
             </div>
             <div>
                 <BsGlobe fontSize={25} style={{position:"relative",top:"10px",cursor:"pointer"}}/>
             </div>
             <div className='login-menu-holder' onClick={()=>dispatch(open())}>
                 <RxHamburgerMenu color='#b0b0b0'style={{position:"relative",top:"4px",left:"5px",cursor:"pointer"}} fontSize={20}/>
                 <FaUserCircle color='#b0b0b0' style={{position:"relative",left:"20px",cursor:"pointer"}} fontSize={30}/>
             </div>
         </div>
         {
           openLoginPopup &&  <LoginPopup/>
         }
          <LoginSignUpForm/>
    </div>
  )
}

export default Header
import React from 'react'

function loginPopup() {
  return (
    <div className='popup-login-holder' >
         <div>
             <ul className='top'>
                 <li className="specific-li">Sign up</li>
                 <li className="specific-li">Log in</li>
             </ul>
         </div>
         <div  className='border-top-login-popup'>
            <ul className='bottom'>
                 <li className="specific-li">Airbnb your Home</li>
                 <li className="specific-li">Help</li>
             </ul>
         </div>
    </div>
  )
}

export default loginPopup
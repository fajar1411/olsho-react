import React from 'react';
import '../../../assets/css/project.css';
import Logo from '../../../assets/image/imgregis/BeliKuy.png';
import Help from '../../../assets/image/imgregis/help.jpg';
function NavsLogin() {
  return (
    
    <div>
 
    <nav className='nav-login'>
        <h1> 
          <a href="http://localhost:3000/register">
         &#129144; </a>
          IF YOU ANY ACCOUNT PLEASE REGIS
        </h1> 
        <div id='nav-logo'>
          <a  href="http://localhost:3000/app"><img src={Logo} alt="BeliKuy" /></a> 
        </div>
        <div id='container-help'>
          <a href="#help"><img src={Help} alt="help" /></a> 
        </div>
    </nav>

    </div>
  );
}

export default NavsLogin;
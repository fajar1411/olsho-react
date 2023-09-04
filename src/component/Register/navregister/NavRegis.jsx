import React from 'react';
import '../../../assets/css/project.css';
import Logo from '../../../assets/image/imgregis/BeliKuy.png';
import Help from '../../../assets/image/imgregis/help.jpg';
function NavsRegis() {
  return (
    
    <div>
 
    <nav className='nav-regis'>
        <div className='container-panah'>
        <h3> 
          <a href="http://localhost:3000/login">
         &#129144; </a>
          IF YOU ANY ACCOUNT PLEASE LOGIN 
        </h3> 
        </div>
        <div id='container-logo'>
          <a  href="http://localhost:3000/app"><img src={Logo} alt="BeliKuy" /></a> 
        </div>
        <div id='container-help'>
          <a href="#help"><img src={Help} alt="help" /></a> 
        </div>
    </nav>

    </div>
  );
}

export default NavsRegis;
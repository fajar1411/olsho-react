import React from 'react';
import '../../../assets/css/project.css';
import Logos from '../../../assets/image/imgregis/BeliKuy.png';
import Google from '../../../assets/image/imgregis/google.png';
function ContentRegis() {
  return (
    
    <div id="container-content">
    <div id= "container-kiri">
      <img className='logo-bk' src={Logos}alt="logo" />
    </div>

    <div id= "container-kanan">
      <form className='form-register' >
        <input
            type="text"
            name="email"
            placeholder="Email"
            className="regist-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="regist-input"
          />
          <br />
          <br />
          <button className="btn-register">Register</button>
          <button className="btn-google"> Google  <img className='img-gg'src={Google} alt="google"/> </button>
      </form>
    </div>
    </div>
  );
}

export default ContentRegis;
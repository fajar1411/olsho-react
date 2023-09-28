import React, { useState } from "react";
import Modal from 'react-modal';
import '../../../assets/css/project.css';
import { Itemdata } from "../../../databarang/data.js";
import { useEffect } from "react";
import Logo from '../../../assets/image/imgregis/BeliKuy.png';
import Logout from '../../../assets/image/imgregis/logout.png';
import Profile from '../../../assets/image/imgregis/profile.png';
// import Help from '../../../assets/image/imgregis/help.jpg';0
function NavsApp({searchquery, setquery,query}) {

  const [username,setUser]= useState("Profile")
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root');
  function openModal() {
    setIsOpen(true);
  }

  useEffect (() => {
    profile()
  },[])

  function closeModal() {
    setIsOpen(false);
  }

  
  const profile = () => {
    const data  = localStorage.getItem("username")

    if (data != ""){
      setUser(data)
    }

  }
 const handlesearch = (e)=>{
    e.preventDefault();

    query = e.target.value;
    console.log("ini query", query)
    setquery(query)
 }
  return (
    
    <>
      <nav className="nav-app">
        <div className="img-nd"> 
          <img src={Logo} alt="Logo" />
          
        </div>
        <input  type="text" placeholder="Search.." name="search" value={searchquery} onChange={handlesearch}/>
        <ul>
          <li>dahsboard</li>
          <li>logout</li>
          <li>Kategori</li>
          <li>Keranjang</li>
          <div className="dropdowd-user">
            <button className="dropbtn">{username}</button>
            <div class="dropdown-content">
              <a href="#"><img  className= 'img-lg' src={Logout} alt="Logo" />Logout</a>
              <a href="#"><img  className= 'img-profile' src={Profile} alt="Logo" />Profile</a>
              <a href="#">Keranjang</a>
            </div>
          </div>
        </ul>
      </nav>
            
    
     
    </>
  );
}

export default NavsApp;
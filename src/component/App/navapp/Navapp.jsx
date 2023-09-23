import React, { useState } from "react";
import Modal from 'react-modal';
import '../../../assets/css/project.css';
import { Itemdata } from "../../../databarang/data.js";
import { useEffect } from "react";
import Logo from '../../../assets/image/imgregis/BeliKuy.png';
// import Help from '../../../assets/image/imgregis/help.jpg';0
function NavsApp() {
  const [filteredList, setFilteredList] = new useState([]);
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
    // setUser("Profile")
     

  }
  const filterBySearch = (event) => {

    event.preventDefault();
    const query = event.target.value;
    console.log("ini query",query)
    const lc= query.toLowerCase()

    var updatedList = [...Itemdata];
   
    updatedList = updatedList.filter((item) => {
      const lc2=  item.namaBarang.toLowerCase();
      const data =lc2.indexOf(lc)  <0
      console.log(data)
      return data ;
    }); 

    setFilteredList(updatedList);
    // setIsOpen(false);
  };
  
  return (
    
    <>
      <nav className="nav-app">
        <div className="img-nd"> 
          <img src={Logo} alt="Logo" />
        </div>
        <input onClick={openModal} type="text" placeholder="Search.." name="search" value={filteredList} onChange={filterBySearch}/>
        <ul>
          <li>dahsboard</li>
          <li> {username}</li>
          <li>logout</li>
          <li>Kategori</li>
          <li>Keranjang</li>
        </ul>
      </nav>
            
    
     
    </>
  );
}

export default NavsApp;
import React, { useState } from "react";
import Modal from 'react-modal';
import '../../../assets/css/project.css';
import { Itemdata } from "../../../databarang/data.js";
import { useEffect } from "react";
// import Logo from '../../../assets/image/imgregis/BeliKuy.png';
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
    const data  = localStorage.getItem("email")
     setUser(data)

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
    
    <div>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <nav className='nav-app'>
      <div className='connav-app'>
      <ul>
        <li> dashboard </li>  
      </ul>
      
      <ul>
        <li> Contact </li>
      </ul>
         
      <ul>
        <li> dropdown </li>
      </ul> 

      <ul>
        <li> {username}</li>
     </ul> 
     <input onClick={openModal} type="text" placeholder="Search.." name="search" value={filteredList} onChange={filterBySearch}/>

 
      </div>
     
     
    </nav>
   
        {/* <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="header-modal">
            <h3 ref={(_subtitle) => (subtitle = _subtitle)}>Add Ticket</h3>
            <button onClick={closeModal}>x</button>
          </div>

          <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
        </Modal> */}

    </div>
  );
}

export default NavsApp;
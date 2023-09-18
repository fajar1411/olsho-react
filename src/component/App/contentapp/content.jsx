
import '../../../assets/css/project.css';
import { Itemdata } from "../../../databarang/data.js";
import Logos from '../../../assets/image/imgregis/BeliKuy.png';

// import { useNavigate } from "react-router-dom";
// import CurrencyFormat from 'react-currency-format';
function ContentApp() {
    
    
  
  return (
    
    <>
      
    <div  id= "content-app">
    {/* <div  id='content-gerak'>

    </div> */}
      {Itemdata.map((item) => (
      <div id="container-item">
      
      <div id = "content-barang">
    
      <img src={item.image} alt="" />
      <div className='container-field'>
          <h3><span> {item.namaBarang} </span> </h3>
          <h3><span> {item.qty} </span> </h3>
          <h3><span>{'RP' +  item.harga} </span> </h3>
        
          <h3><span>{  item.kategori} </span> </h3>
      <div className='btn-beli'>
          <button type='submit'>beli</button>
          <button className= 'detail'type='submit'>Detail</button>
      </div>
      </div>
      
      
      </div>
   
      </div>
     ))}
      </div>
     
    </>
  );
}

export default ContentApp;
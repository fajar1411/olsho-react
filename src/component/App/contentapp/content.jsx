
import '../../../assets/css/project.css';
import { Itemdata } from "../../../databarang/data.js";
import Logos from '../../../assets/image/imgregis/BeliKuy.png';
import shop from '../../../assets/image/imgregis/shop.png';
import eyes from '../../../assets/image/imgregis/eyes.jpg';
// import { useNavigate } from "react-router-dom";
// import CurrencyFormat from 'react-currency-format';
function ContentApp() {

    
  const formatter = new Intl.NumberFormat("ID-ID", {
    style: "currency",
    currency: "IDR",
  });
  return (
    
    <>
    <div id='container-dashboard'>
      <div className='container-item'>
      {Itemdata.map((item) => (
        <div className='container-barang'>
         
          <div className='content-barang'>
          <img className='img-brng' src={item.image} alt="" />
          <div className='container-field'>
          <h3><span> {item.namaBarang} </span> </h3>
          <h3><span> {item.qty} </span> </h3>
          <h3><span>{formatter.format(item.harga)} </span> </h3>
          <h3><span>{  item.kategori} </span> </h3>
          </div>
          <button className='keranjang' type='submit'><img className='img-shop'src={shop} alt="shop"/> </button>
          <button className= 'detail'type='submit'><img className='img-eyes'src={eyes} alt="shop"/> </button>
          </div>
        </div>
      ))}
      </div>


    </div>





    {/*       
    <div  id= "content-app">
 
      {Itemdata.map((item) => (
      <div id="container-item">
      
      <div id = "content-barang">
    
      <img className='img-brng' src={item.image} alt="" />
      <div className='container-field'>
          <h3><span> {item.namaBarang} </span> </h3>
          <h3><span> {item.qty} </span> </h3>
          <h3><span>{formatter.format(item.harga)} </span> </h3>
      

          <h3><span>{  item.kategori} </span> </h3>
      <div className='btn-beli'>
          <button type='submit'><img className='img-shop'src={shop} alt="shop"/> </button>
          <button className= 'detail'type='submit'><img className='img-eyes'src={eyes} alt="shop"/> </button>

      </div>
      </div>
      
      
      </div>
   
      </div>
     ))}
      </div> */}
     
    </>
  );
}

export default ContentApp;
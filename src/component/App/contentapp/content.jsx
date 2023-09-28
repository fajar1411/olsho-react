import React, { useState,useEffect  } from "react";
import '../../../assets/css/project.css';
// import { Itemdata } from "../../../databarang/data.js";
import Logos from '../../../assets/image/imgregis/BeliKuy.png';
import shop from '../../../assets/image/imgregis/shop.png';
import eyes from '../../../assets/image/imgregis/eyes.jpg';
import '@coreui/coreui/dist/css/coreui.min.css'
import ContentKeranjang from "../../Keranjang/content";
import { CImage ,CCarouselItem,CCarousel} from '@coreui/react'
const style = {
  width: 297,
  height: 296,
};

function ContentApp({databarang,addToCart,formatter }) {


  
  return (
    
    <>
<div id='container-dashboard'>
   
  <div className='container-geser'>
    <CCarousel  controls indicators>
    <CCarouselItem  >
      <CImage className="d-block w-100" src={Logos} alt="slide 1" />
    </CCarouselItem>
    <CCarouselItem>
      <CImage className="d-block w-100 " src={Logos} alt="slide 2" />
    </CCarouselItem>
    <CCarouselItem >
      <CImage className="d-block w-100" src={Logos} alt="slide 3" />
    </CCarouselItem>
  </CCarousel>
  </div>
  <div id="content-dashboard">
<div className="container-item">
    <div className="container-barang">
      
       {databarang.map((item) => (

      <div className="content-barang">
        <div className="content">
        <img  className='img-brng' src={item.image} alt="" />
        <div className="container-field">
          <h3>{item.namaBarang} </h3>
          <h3> {item.qty}  </h3> 
          <h3>{formatter.format(item.harga)} </h3>
          <h3>{  item.kategori} </h3>
          <button onClick={() => addToCart(item)} className='keranjang' type='submit'><img className='img-shop'src={shop} alt="shop"/> </button>
          <button className= 'detail'type='submit'><img className='img-eyes'src={eyes} alt="shop"/> </button>
        
        </div>
        </div>
      </div>
        ))}
    </div>
 
  </div>
</div>



  </div>





    
     
    </>
  );
}

export default ContentApp;

 {/* {Itemdata.map((item) => (
        <div className='container-barang'>
         
          <div className='content-barang'>
          <img  className='img-brng' src={item.image} alt="" />
          <div className='container-field'>
          <h3>{item.namaBarang} </h3>
          <h3> {item.qty}  </h3>
          <h3>{formatter.format(item.harga)} </h3>
          <h3>{  item.kategori} </h3>
          </div>
          <button onClick={() => addToCart(item)} className='keranjang' type='submit'><img className='img-shop'src={shop} alt="shop"/> </button>
          <button className= 'detail'type='submit'><img className='img-eyes'src={eyes} alt="shop"/> </button>
          </div>
        </div>
      ))} */}

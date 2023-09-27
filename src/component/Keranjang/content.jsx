
import '../../assets/css/project.css';
// import { Itemdata } from "../../../databarang/data.js";
import Logos from '../../assets/image/imgregis/BeliKuy.png';
// import shop from '../../../assets/image/imgregis/shop.png';
// import eyes from '../../../assets/image/imgregis/eyes.jpg';
// import { useNavigate } from "react-router-dom";
// import CurrencyFormat from 'react-currency-format';
// import Button from "@material-ui/core/Button";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
function ContentKeranjang() {

    
 
  return (
    
    <>
    <div className='container-keranjang'>
      <div className='content-keranjang'> 
      <div className='table-header'>
      <h3>Id</h3>
      <h3>Nama_barang</h3>
      <h3>Gambar</h3>
      <h3>hargas</h3>
      <h3>QTY</h3>
      <h3>total harga</h3>
 
      </div>
      <div className='table-content'>
      <h3>001</h3>
      <h3>baju</h3>
      <img src={Logos} alt="img-card" className='img-cart'/>
      <h3>200000</h3>
      <h3>3</h3>
      <h3>400000</h3>
 
      </div>
 
       
      </div>
  
    </div>
     
    </>
  );
}

export default ContentKeranjang

  {/* <div className='quanity-group'>
                <Button
                    negative 
                    className='quan-buttons' 
                > 
                    <Icon name='minus' /> 
                </Button>
                <Input 
                    className='input-quanity'
                    value={props.item.quantity} 
                />
                <Button
                    positive 
                    className='quan-buttons'
                > 
                    <Icon name='plus' /> 
                </Button>
            </div> */}
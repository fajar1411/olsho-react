
import NavsApp from '../../component/App/navapp/Navapp'
import ContentApp from '../../component/App/contentapp/content'
import { Itemdata } from "../../databarang/data.js";
import React, { useState,useEffect  } from "react";
// import ContentLogin from '../../component/Login/contentlogin/Content'
function App() {
const [searchquery, setquery] = new useState();
const [databarang,setdata]= new useState([])
const [cart , setCart]= new useState([]);
let [query] = new useState("")


useEffect(() => {
  setdata(Itemdata);
  addToCart()
 }, []);

 
const addToCart = (item) => {
  
  setCart([...cart, item]);
  console.log("ini cart",cart)
};

const formatter = new Intl.NumberFormat("ID-ID", {
  style: "currency",
  currency: "IDR",
});

const filterBySearch = () =>{
    const finddata = databarang.filter((item) => {
      return item.namaBarang.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setdata(finddata)
}

  return (
    <div>
      
       <NavsApp searchquery={searchquery} setquery={setquery} query={query}/>
       <ContentApp databarang={databarang} addToCart={addToCart } formatter={formatter}/>
       
    </div>
    
  )
}

export default App
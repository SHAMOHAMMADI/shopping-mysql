import React, { useEffect, useState } from "react";
import { TProduct } from "../type/Types";
import { getProducts } from "../services/api";
import axios from "axios";
// import { getProducts } from "../services/api";




function Store() {

  const [product , setProduct] = useState<TProduct[]>([])
const allFetch = async ()=>{
 const data = await fetch("http://localhost:5175/data")
 const json = await data.json()
setProduct(json)
}
useEffect(()=>{
  allFetch()
  
  },[])

  // console.log(product)
  return (
    <div>
    {product.map((res)=>(
    <img src={res.image} alt="" />
   ))} 
   
    </div>
  );
}

export default Store;

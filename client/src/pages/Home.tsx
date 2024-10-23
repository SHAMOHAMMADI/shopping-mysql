import React, { useEffect, useState } from 'react'
import Container from '../components/container/Container'
import { TProduct } from '../type/Types'
import axios from 'axios'


function Home() {
const [pro , setPro] = useState<TProduct[]>([])
  
  useEffect(()=>{
    axios.get("http://localhost:8890/products").then((res)=>{
      setPro(res.data)
    })
  },[])
 
  return (
    <div>
    <Container>
      <div className="grid grid-cols-3 m-2 ">
        {pro.map((re)=>(
          <div key={re.id} className="flex flex-col justify-center items-center iteflex-col p-4 m-4 border shadow-inner rounded ">
            <img src={re.image} alt="" className="w-52 " />
            <p>{re.title}</p>
            <p>{re.des}</p>
            <p>{re.category}</p>
            <p>{re.rating}</p>
          </div>
        ))}
      </div>
    </Container>
      </div>
  )
}

export default Home
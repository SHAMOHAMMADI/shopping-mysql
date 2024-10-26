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
      <div className='flex flex-col justify-center items-center text-center  [&>*]:border [&>*]:w-4/5 [&>*]:mx-6 my-6'>

      <div>slide</div>
       <div className="  ">
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
      <div>Articles</div>
      <div>services</div>
     
        </div>
    </Container>
      </div>
  )
}

export default Home
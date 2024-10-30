


import { useEffect, useState } from 'react'
import { TAboutUs } from '../type/Types'
import axios from 'axios'
import Container from '../components/container/Container'

function AboutUs() {

   
  const [aboutUs , setAboutUs] = useState<TAboutUs[]>([])

  useEffect(()=>{
    axios.get("http://localhost:8890/aboutUs").then((res)=>{
      setAboutUs(res.data)
    })
  },[] )
  return (
    <div>
      <Container>

      {aboutUs.map((res)=>(
        <div className="grid ">
             <div className="border p-4 m-2  bg-green-100 rounded" >
          <img src={res.image}  className="w-52 cover me-6 rounded h-52 cover float-left" alt="no Image" />
            <p><b>{res.header}</b></p>
            <p>{res.contexts}</p>
            <p></p>
        

        </div>
 </div>
      ))}
      </Container>
    

    </div>
  )
}

export default AboutUs
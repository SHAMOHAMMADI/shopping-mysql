import React, { useEffect, useState } from 'react'
import Container from '../components/container/Container'
import axios from 'axios'

type Tproject = {
  name : string ,
  place : string , 
  year : number , 
  image : string
}
function Projects() {
  const [projects , setProjects] = useState<Tproject[]>([])

  useEffect(()=>{
   axios.get("http://localhost:8890/Projects").then((res)=>{
    setProjects(res.data)
   })
  },[])
  return (
    <div>
      <Container>
        <div className="grid grid-cols-2 w-5/6 mx-auto md:grid-cols-3 lg:grid-cols-4 gap-4 m-4 h-screen ">
      {projects.map((res)=>(
        <div className="border shadow-inner flex flex-col justify-evenly items-center">
          <img src="/projects/1.webp"  className="w-48 rounded h-36" alt="no image" />
        <h3>{res.name}</h3>
        <h4>{res.place}</h4>
        <h5>{res.year}</h5>

        </div>
        
      ))}
        </div>

      </Container>
    </div>
  )
}

export default Projects
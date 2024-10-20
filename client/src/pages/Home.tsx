import React, { useEffect, useState } from 'react'
import Container from '../components/container/Container'
import { TProduct } from '../type/Types'
import { getProducts } from '../services/api'

function Home() {
  const [pro , setPro] = useState<TProduct[]>([])
useEffect(()=>{
getProducts().then((res)=>{
  setPro(res.data.data)
})
},[])

console.log(pro)

  return (
    <div>

    <Container>
      <div>
     {pro?.description}
      </div>
    </Container>
      </div>
  )
}

export default Home
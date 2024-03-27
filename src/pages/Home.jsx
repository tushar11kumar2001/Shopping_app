import React, { useEffect, useState } from 'react'
import getProducts from '../utils/api-client'
import Card from '../components/Card';
import ShimmerCard from '../components/ShimmarUI';

const Home = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
     getProducts().then((data)=>{setProducts(data)});

    },[])
  
  if( products.length === 0 ) return <ShimmerCard/>
  return (
    <div className='grid grid-cols-1 justify-items-center gap-y-14 relative top-24 sm:grid-cols-4'>
        {products.map((data)=>{
           return  <Card key={data?.id} data={data}/>
        })}
       
    </div>
  )
}

export default Home

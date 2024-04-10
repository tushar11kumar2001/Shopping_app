import React, { useEffect} from 'react'

import Card from '../components/Card';
import ShimmerCard from '../components/ShimmarUI';
import {useSelector} from 'react-redux';

const Home = () => {

  const state = useSelector(store => store.product);


  
  if(state.loading) return <ShimmerCard/>
  return (
    <div className='grid grid-cols-1 justify-items-center gap-y-14 relative top-24 sm:grid-cols-4'>
        {state.product.map((data)=>{
           return  <Card key={data?.id} data={data}/>
        })}
       
    </div>
  )
}

export default Home

import React from 'react'
import Navbar from '../components/Navbar'
import LeftStrip from '../components/LeftStrip'
import MidStrip from '../components/MidStrip'
import RightStrip from '../components/RightStrip'

function Home() {
  return (
    <>
      <Navbar />
      <div className='h-dvh w-full bg-zinc-950 flex'>
        <div className='flex-1'><LeftStrip/></div>
        <div className='flex-1'><MidStrip/></div>
        <div className='flex-1'><RightStrip/></div>
      </div>
    </>
  )
}

export default Home

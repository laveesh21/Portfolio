import React from 'react'
import LaveeshImg from '../../assets/lv00.jpg'

function Home() {
  return (
    <>
        <div className='flex mt-12'>
            <div className='flex-1 flex flex-col justify-center items-center'>
                <div className='text-5xl font-extrabold'>
                  <h1>Hi There! I'm</h1>
                  <h1 className='text-purple-700'>Laveesh Tomar</h1>
                </div>
                <h1>Fullstack Web Developer</h1>
            </div>
            <div className='flex-1 '><img className='rounded-full w-2/3 h-auto' src={LaveeshImg} alt="Not Avilable"/></div>
        </div>
    </>
  )
}



export default Home
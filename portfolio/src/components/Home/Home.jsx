import React from 'react'
import LaveeshImg from '../../assets/file.png'

function Home() {
  return (
    <>
        <div className='flex mt-12 bg-slate-200 pt-7'>
            <div className='flex-1 flex flex-col justify-center items-center px-3'>
                <div className='text-3xl md:text-5xl lg:text-6xl font-extrabold'>
                  <h1>Hi There! I'm</h1>
                  <h1 className='text-purple-700'>Laveesh Tomar</h1>
                </div>
                <div className='mt-1  sm:mt-1 md:mt-6 text-right'>
                  <h1 className='font-semibold text-sm lg:text-lg'>Fullstack Web Developer</h1>
                </div>
            </div>
            <div className='flex-1 flex justify-center md:justify-start'><img className='rounded-xl w-2/3 h-auto sm:w-18 md:w-7/12' src={LaveeshImg} alt="Not Avilable"/></div>
        </div>
    </>
  )
}



export default Home
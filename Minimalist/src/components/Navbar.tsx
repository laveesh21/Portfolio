  import React from 'react'
  import '../index.css'

  const name = "Laveesh Tomar"

  function Navbar
    () {
    return (
      <>
      <div className="font-semibold flex justify-between p-4 gap-2 bg-zinc-950 text-white text-xs lg:text-base">
        <div className="flex-1"><h1>{name}</h1></div>
        <div className="flex-1 text-center"><h1>Web Developer</h1></div>
        <div className="flex-1"><h1>Roorkee, India</h1></div>
      </div>
      <div className="h-px bg-zinc-800"></div>
      </>
    )
  }


  export default Navbar

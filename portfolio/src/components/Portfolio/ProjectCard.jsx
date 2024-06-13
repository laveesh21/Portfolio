import React from 'react'

const ProjectCard = ({title, desc, link, img})=>{
    return(
        <>
            <div className='border-2 border-purple-700 rounded-xl min-w-[20px] h-96'>
                <img src={img} alt="" className='rounded-xl h-3/5'/>
                <div className='p-3 flex flex-col justify-between h-2/5'>
                    <div className='flex flex-col '>
                        <h1 className='text-xl font-bold '>{title}</h1>
                        <div className='h-[1px] bg--700 w-96 '>
                            <p className='text-sm'>{desc}</p>
                        </div>  

                    </div>
                    <div className='flex gap-1'>
                    <div className='bg-purple-700 h-auto w-full text-white text-center rounded-l-xl'>Link</div>
                    <div className='bg-green-600 h-auto w-full text-white text-center rounded-r-xl'>About</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
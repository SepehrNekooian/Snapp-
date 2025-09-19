import React from 'react'
import ima1 from "../../public/img/DRIVER1.jpg"
import ima2 from "../../public/img/DRIVER2.jpg"
import ima3 from "../../public/img/DRIVER3.jpg"



const Testimonian = () => {
  return (
    <div>
        <div className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto '>
            {/* header */}
            
                
            {/* header */}
            <div className='text-center ' >
                <h2 className='md:text-5xl text-3xl font-bold text-[#333030] mb-2'>
                Our Expert <span className='text-[#39CF02]'>Snapp!</span> Drivers </h2>
                <p className='mt-4 text-[#333030] max-w-2xl mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Repudiandae a labore ipsam corporis debitis et, modi consectetur vel iste officiis?</p>
            </div>
            {/* <div className="flex justify-center items-center mt-10">
                <button className="bg-[#39CF02] text-white px-8 py-4 transition-all duration-300 rounded
                 hover:text-white hover:bg-green-700">MORE</button>
            </div> */}

            {/* blogs cards section */}

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 mb-4 text-center'>
                {/* card-1 */}
                <div className='bg-white border-b-4 shadow-2xl  rounded-lg relative overflow-hidden  hover:scale-105 
                transition-all duration-200 ease-in cursor-pointer' data-aos="fade-down">
                    <img src={ima1} alt="Blog img 1" className='w-full object-cover mt-4 p-4'/>
                    <div className='p-4 mb-4'>
                        
                        <span>⭐⭐⭐⭐⭐</span>
                        <h2 className='text-[#333030] text-2xl mt-4 font-mono'>DAVID HENRY</h2>
                        
                    </div>
                </div>

                {/* card-2 */}
                <div className='bg-white border-b-4 shadow-2xl  rounded-lg relative overflow-hidden  hover:scale-105 
                transition-all duration-200 ease-in cursor-pointer' data-aos="fade-up">
                    <img src={ima2} alt="Blog img 1" className='w-full object-cover mt-4 p-4'/>
                    <div className='p-4 mb-4'>
                        
                        <span>⭐⭐⭐⭐⭐</span>
                        <h2 className='text-[#333030] text-2xl mt-4 font-mono'>DAVID JOHNOC</h2>
                        
                    </div>
                </div>

                {/* card-3 */}
                <div className='bg-white border-b-4 shadow-2xl  rounded-lg relative overflow-hidden  hover:scale-105 
                transition-all duration-200 ease-in cursor-pointer' data-aos="fade-down">
                    <img src={ima3} alt="Blog img 1" className='w-full object-cover mt-4 p-4'/>
                    <div className='p-4 mb-4'>
                        
                        <span>⭐⭐⭐⭐⭐</span>
                        <h2 className='text-[#333030] text-2xl mt-4 font-mono'>CHRIS MAICHEL</h2>
                        
                    </div>
                </div>

            </div>
        </div>
    
    </div>
  )
}

export default Testimonian
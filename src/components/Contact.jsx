import React from 'react'
import Myphoto from "../../public/img/606.png"

const Contact = () => {
  return (
    
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto relative z-10" id='Contact'>
        <div className='gradientbg p-8 flex flex-col md:flex-row items-center justify-between  space-y-10'>
            {/* text content */}
            <div className='md:w-1/2 'data-aos="fade-right">

            <h2 className='text-3xl lg:text-4xl font-bold mb-4 text-[#333030]'>Im <span className='text-white'>Sepehr Nekooian</span></h2>
            <p className='text-white mb-6'>If you have any questions, contact us!</p>
            <a href="" className='inline-flex items-center px-6 py-3 bg-white border 
            text-[#333030] font-medium rounded hover:bg-gray-100 transition-transform transform 
            hover:scale-105 duration-200 ease-in'>
            Contact Us
            <span className='text-lg ml-2'>→</span>
            </a>

            </div>

            {/* photo content */}
            <div>
                <img src={Myphoto} alt=""  className='w-80 mx-auto md:mt-12' data-aos="fade-left"/>
            </div>

        </div>
        
    </div>
    
  )
}

export default Contact
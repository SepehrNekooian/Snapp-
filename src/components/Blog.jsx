import React from 'react';
import cardimg1 from "../../public/img/snapp1.jpg"
import cardimg2 from "../../public/img/snapp2.jpg"
import cardimg3 from "../../public/img/snapp3.jpg"
import cardvid from "../../public/img/img.jpg"
import {RiPlayFill, RiPlayLine} from "@remixicon/react";




const Blog = () => {
  return (
    <div>
        
        <div className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto'>
            {/* header */}
            <div className='text-center ' >
                <h2 className='md:text-5xl text-3xl font-bold text-[#333030] mb-2'>
                Our Happy Client's <span className='text-[#39CF02]'> Review</span></h2>
                <p className='mt-4 text-[#333030] max-w-2xl mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Repudiandae a labore ipsam corporis debitis et, modi consectetur vel iste officiis?</p>
            </div>
            <div className="flex justify-center items-center mt-10">
                <button className="bg-[#39CF02] text-white px-8 py-4 transition-all duration-300 rounded
                 hover:text-white hover:bg-green-700">MORE</button>
            </div>

           


            {/* photo */}

            <figure className="relative  overflow-hidden mt-14
            md:mt-14  mx-auto ">
                <img src={cardvid} alt="" width={940} height={500} className="w-full h-full
                object-cover" data-aos="zoom-in" />
            </figure>

            {/* testimonial */}

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-40'>
                {/* card-1 */}
                <div className='bg-white border-b-4 shadow-2xl rounded-lg p-6 cursor-pointer' data-aos="fade-down">
                    <div className='mb-4 flex justify-center items-center'>
                        <img src={cardimg1} alt="" className='size-50 w-full object-cover'/>
                    </div>
                    <blockquote className='text-[#333030] text-sm mb-3'>BASIC SNAPP <span className='text-[#39CF02] font-bold'>$0.95</span>KM</blockquote>
                    <div className='text-start flex justify-between items-center mt-5'>
                        <div>
                            <button className='bg-[#39CF02] px-4 py-2 transition-all duration-300 rounded
                              hover:text-white hover:bg-green-700 font-bold'>BOOK NOW</button>
                            {/* <p className='text-sm text-gray-500'>Lorem, ipsum.</p> */}
                        </div>
                        
                    </div>
                </div>

                {/* card-2 */}
                <div className='bg-white border-b-4 shadow-2xl rounded-lg p-6 cursor-pointer' data-aos="fade-up">
                    <div className='mb-4 flex justify-center items-center '>
                        <img src={cardimg2} alt="" className='size-50 w-full object-cover'/>
                    </div>
                    <blockquote className='text-[#333030] text-sm mb-3'>STANDARD SNAPP <span className='text-[#39CF02] font-bold'>$0.47</span>KM</blockquote>
                    <div className='text-center flex justify-between items-center mt-5'>
                        <div>
                            <button className='bg-[#39CF02] px-4 py-2 transition-all duration-300 rounded
                              hover:text-white hover:bg-green-700 font-bold'>BOOK NOW</button>
                            {/* <p className='text-sm text-red'>Lorem, ipsum.</p> */}
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>

                {/* card-3 */}
                <div className='bg-white border-b-4 shadow-2xl rounded-lg  p-6 cursor-pointer' data-aos="fade-down">
                    <div className='mb-4 flex justify-center items-center'>
                        <img src={cardimg3} alt="" className='size-50 w-full  object-cover '/>
                    </div>
                    <blockquote className='text-[#333030] text-sm mb-3'>LUXURIOUS SNAPP <span className='text-[#39CF02] font-bold'>$1.87</span>KM</blockquote>
                    <div className='text-start flex justify-between items-center mt-5'>
                        <div>
                            <button className='bg-[#39CF02] px-4 py-2 transition-all duration-300 rounded
                              hover:text-white hover:bg-green-700 font-bold'>BOOK NOW</button>
                            {/* <p className='text-sm text-gray-500'>Lorem, ipsum.</p> */}
                        </div>
                        
                    </div>
                </div>

            </div>

        </div>



        

    
    </div>
  )
}

export default Blog
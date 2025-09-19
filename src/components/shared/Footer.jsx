import React from 'react'
import "../../assets/App.css"
import Instagram from "../../footerimage/1.png"
import Facebook from "../../footerimage/2.png"
import Telegram  from "../../footerimage/3.png"
import whatsapp from "../../footerimage/4.png"




const Footer = () => {
  return (
    <div className='gradientbg md:px-14 p-4 max-w-screen-2xl mx-auto text-white'>

        <div className='my-12 flex flex-col md:flex-row gap-10'>
            <div className='md:w-1/2 space-y-8'>
                <a href="/" className='text-2xl font-semibold flex items-center space-x-3'>
                <span className='text-[#333030] text-5xl'>Snaap!</span></a>
                <p className='md:w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vitae, 
                maiores quae dolorem quam quaerat beatae enim animi.</p>
                <div>
                <input type="Email" name='email' id='email' placeholder='Your Email...'
                className='bg-white text-[#333030] px-4 py-2 rounded-md focus:outline-none'/>
                <input type="submit" value="subscript" className='px-4 py-2 bg-[#39CF02] rounded-md
                -ml-2 cursor-pointer hover:bg-white hover:text-[#071900] transition-all duration-300'/>
            </div>
            </div>

            {/* Footer Navigation */}

            <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>

                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl'>Quick Link</h4>
                    <ul className='space-y-3'>
                        <a href="/" className='block hover:text-gray-300'>About Us</a>
                        <a href="/" className='block hover:text-gray-300'>Work Gallery</a>
                        <a href="/" className='block hover:text-gray-300'>Client Feedback</a>
                        <a href="/" className='block hover:text-gray-300'>Our Service</a>
                    </ul>
                </div>

                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl'>Quick Link</h4>
                    <ul className='space-y-3'>
                        <a href="/" className='block hover:text-gray-300'>Our Team</a>
                        <a href="/" className='block hover:text-gray-300'>Our Feature</a>
                        <a href="/" className='block hover:text-gray-300'>Our Drivers</a>
                        <a href="/" className='block hover:text-gray-300'>Contact Us</a>
                    </ul>
                </div>


                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl'>Official info</h4>
                    <ul className='space-y-3'>
                        <p className=' hover:text-gray-300'>+98037876549</p>
                        <p className=' hover:text-gray-300'>Snekoian@gmail.com</p>
                        <p className=' hover:text-gray-300'>Yosef Abad Zinali-27</p>
                        <p >Tehran</p>
                    </ul>
                </div>

            </div>
            
        </div>

        <hr />

        <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8'>
            <p>@ Snaap! --- 2025. All rights reserved.</p>
            <div className='flex items-center space-x-5'>
                <img src={Instagram} alt="" className=' rounded-full w-10 cursor-pointer hover:-translate-y-4 transtion-all duration-300' />
                <img src={Facebook} alt=""  className=' rounded-full w-10 cursor-pointer hover:-translate-y-4 transtion-all duration-300'/>
                <img src={Telegram} alt=""  className=' rounded-full w-10 cursor-pointer hover:-translate-y-4 transtion-all duration-300'/>
                <img src={whatsapp} alt=""  className=' rounded-full w-10 cursor-pointer hover:-translate-y-4 transtion-all duration-300'/>
                
            </div>
        </div>
    </div>
  )
}

export default Footer
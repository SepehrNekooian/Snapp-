import React from 'react'
import "../assets/App.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'

const data=[
    {
        image:"../../src/features/Slider/1.jpg",
        title:"Gas",
    },
    {
        image:"../../src/features/Slider/2.jpg",
        title:"Refrigerator",
    },
    {
        image:"../../src/features/Slider/3.jpg",
        title:"Television",
    },
    {
        image:"../../src/features/Slider/4.jpg",
        title:"Washing machine",
    },
    {
        image:"../../src/features/Slider/5.jpg",
        title:"Dishwasher",
    }
]

const Slidder = () => {

let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
};



  return (
    <div className='md:px-14 p-4 max-w-screen-2xl mx-auto space-y-10 bg-[#333030] mt-20 mb-20'>

        <div className='md:w-3/4 m-auto '>

        <Slider {...settings}>

          {
            data.map((item,index)=>{
                return(
                    <div key={index} className='mt-15 mb-15'>
                        <div>
                            <img src={item.image} className=' object-cover block m-auto'/>
                        </div>
                        <div className='p-6  bg-[#39CF02] text-center font-semibold'>
                            <p className='font-semibold text-[#333030]'>{item.title}</p>
                        </div>
                    </div>
                )
            })
          }

        </Slider>

        </div>
        

    </div>
    
  )
}

export default Slidder
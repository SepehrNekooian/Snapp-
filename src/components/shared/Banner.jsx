import ima12 from "../../features/snapp food.jpg"
import Marquee from "react-fast-marquee"
import img1 from "../../Marquee/1.png"
import img2 from "../../Marquee/2.png"
import img3 from "../../Marquee/3.png"
import img4 from "../../Marquee/4.png"
import img5 from "../../Marquee/5.png"
import img6 from "../../Marquee/6.png"
import img7 from "../../Marquee/7.png"
import img8 from "../../Marquee/8.png"



const Banner = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl  mx-auto  " id="Home">
        <div className="gradientbg  rounded-xl rounded-br-[700px] md:p-9 px-4 py-9 mt-30" data-aos="fade-in">
          <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10 ">

            

            {/* banner image */}

            <div >
              <img src={ima12} alt="" className="md:w-lg h-90 rounded-xl rounded-br-[950px] 
              hover:-translate-y-4 transition-all duration-300 " data-aos="fade-up" />
            </div>



            {/* banner content */}

            <div className="md:w-3/5" data-aos="fade-up" >
              <h2 className="md:text-8xl text-4xl font-extrabold mb-6 text-[#333030]">Snapp!</h2>
              <p className="text-white text-5xl font-mono mb-8">Get arround down</p>
              <div>
                <button className="px-8 py-2 bg-[#333030] text-white font-mono hover:bg-white hover:text-[#333030] rounded rounded-br-[80px] transition-all
                duration-300 ">BOOK</button>
              </div>
            </div>

            


            

          </div>
        </div>
        <div className="App">

              <div className="mt-20">
                <Marquee direction="right" speed={50}>
                  <div className="image-wraper">
                    <img src={img1} alt="" />
                  </div>
                  <div className="image-wraper">
                    <img src={img2} alt="" />
                  </div>
                  <div className="image-wraper">
                    <img src={img3} alt="" />
                  </div>
                  <div className="image-wraper">
                    <img src={img4} alt="" />
                  </div>
                  <div className="image-wraper">
                    <img src={img5} alt="" />
                  </div>
                  <div className="image-wraper">
                    <img src={img6} alt="" />
                  </div>
                  <div className="image-wraper">
                    <img src={img7} alt="" />
                  </div>
                  <div className="image-wraper">
                    <img src={img8} alt="" />
                  </div>
                </Marquee>
              </div>

            </div>
      </div>

      
  )
}

export default Banner
import Aboutimg1 from "../../src/features/New folder/5.png"
import Aboutimg2 from "../../src/features/New folder/snapp3.jpg"

const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto space-y-10" id="About Us">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            <div className="md:w-1/2">
                 
                <img src={Aboutimg1} alt="" className="w-full rounded-4xl" data-aos="fade-right" />

            </div>

            {/* About content */}

            <div className="md:w-2/4" data-aos="fade-left">
                <h2 className="md:text-5xl text-3xl font-bold text-green-950 mb-5 leading-normal ">
                Professional and Dedicated Online<span className="text-[#39CF02]"> Snapp</span> Service</h2>
                <p className="text-gray-700 text-lg mb-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Quis tempora quos laborum aperiam illum dolore? Est id inventore error ut.</p>
                <button className="bg-[#39CF02] text-white px-8 py-4 transition-all duration-300 rounded
                 hover:text-white hover:bg-green-700">DISCOVER MORE</button>
            </div>

              
        </div>

        

        {/* 2nd part */}

        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8 ">

            <div className="md:w-1/2 mt-30">
                 
                <img src={Aboutimg2} alt="" className="w-full rounded-4xl" data-aos="fade-left"/>

            </div>

            {/* About content */}

            <div className="md:w-2/4" data-aos="fade-right">
                <h2 className="md:text-5xl text-3xl font-bold text-green-950 mb-5 leading-normal ">
                Best<span className="text-[#39CF02]"> Snapp </span>Service For Your Town</h2>
                <p className="text-gray-700 text-lg mb-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Quis tempora quos laborum aperiam illum dolore? Est id inventore error ut.</p>
                <button className="bg-[#39CF02] text-white px-8 py-4 transition-all duration-300 rounded
                 hover:text-white hover:bg-green-700">DISCOVER MORE</button>
            </div>

              
        </div>


        
    </div>
  )
}

export default About
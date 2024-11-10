
import { FaCheckCircle } from "react-icons/fa";
import { CardTitle } from "@/components/ui/card";

export default function Skillcard(){

    return(
      
        <div  className="p-5 flex flex-col justify-center   bg-cyan-300 ">
         <div data-aos="fade-right" className=" glass p-6 shadow-xl rounded-2xl" >
         <CardTitle className="text-3xl font-serif text-[#133E87] pb-5">Skills</CardTitle>
         {/* Skill: HTML */}
         <div className="pb-6" >
          <span className="text-3xl flex text-yellow-500 hover:text-yellow-500">
            <FaCheckCircle />
            <h3 className="text-xl pl-4 pt-1 font-semibold">HTML</h3>
          </span>
          <div className="w-full h-2 border-4 border-yellow-500 rounded-lg mt-3 "></div>
          <h3 className="float-right">100%</h3>
        </div>

        {/* Skill: CSS */}
        <div className="pb-6" >
          <span className="text-3xl flex text-yellow-500 hover:text-yellow-500">
            <FaCheckCircle />
            <h3 className="text-xl pl-4 pt-1 font-semibold">CSS</h3>
          </span>
          <div className="w-full h-2 border-4 border-yellow-500 rounded-lg mt-3 "></div>
          <h3 className="float-right">100%</h3>
        </div>

        {/* Skill: TypeScript */}
        <div className="pb-6">
          <span className="text-3xl flex text-yellow-500 hover:text-yellow-500">
            <FaCheckCircle />
            <h3 className="text-xl pl-4 pt-1 font-semibold">TypeScript</h3>
          </span>
          <div className="w-full h-2 border-2 border-yellow-500 rounded-lg mt-3">
            <div className="w-[70%] bg-yellow-500 h-1"></div>
          </div>
          <h3 className="float-right">70%</h3>
        </div>

        {/* Skill: Tailwind */}
        <div className="pb-6">
          <span className="text-3xl flex text-yellow-500 hover:text-yellow-500">
            <FaCheckCircle />
            <h3 className="text-xl pl-4 pt-1 font-semibold">Tailwind</h3>
          </span>
          <div className="w-full h-2 border-2 border-yellow-500 rounded-lg mt-3">
            <div className="w-[80%] bg-yellow-500 h-1"></div>
          </div>
          <h3 className="float-right">80%</h3>
        </div>

        {/* Skill: Python */}
        <div >
          <span className="text-3xl flex text-yellow-500 hover:text-yellow-500">
            <FaCheckCircle />
            <h3 className="text-xl pl-4 pt-1 font-semibold">Python</h3>
          </span>
          <div className="w-full h-2 border-2 border-yellow-500 rounded-lg mt-3 "></div>
          <h3 className="float-right">0%</h3>
        </div>
         </div>
      </div>
    )
}
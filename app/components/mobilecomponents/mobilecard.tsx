import Typewriter from 'typewriter-effect';
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Mobilecard(){

    return(
        <div  className="p-5   flex flex-col justify-center  bg-cyan-300 ">
        <div data-aos="fade-up" className="card  pt-20 glass  flex flex-col justify-center items-center  shadow-xl ">
        <figure>
          <Image 
        src="/pictures/123.jpeg" 
        alt="profile-Pic" 
        width={300} 
        height={300} 
        className="rounded-lg border-4 border-double border-[#133E87]" 
      />
        </figure>
        <div className="card-body text-center">
        <h1 className="text-2xl font-bold text-[#133E87]">Muhammad Waseem</h1>
        <div className='text-lg'>
        <Typewriter
          options={{
            strings: ['Web-Developer', 'UI/UX Designer', 'Full-Stack Developer', 'Digital-Marketing Exp'],
            autoStart: true,
            loop: true,
          }}
        />
        </div>
        <div className="flex flex-row gap-6 justify-center items-center ">
        <Link href={"#"}> 
          <div className="text-3xl m-1 hover:text-blue-700 flex text-blue-400">
            <FaLinkedin />
            <p className="text-lg pt-1 cursor-pointer"></p>
          </div>   
        </Link>
        
        <Link href={"https://www.youtube.com/"} target="_blank">
          <div className="text-3xl m-1 hover:text-red-700 flex text-red-500">
            <FaSquareYoutube />
            <p className="text-lg pt-1 cursor-pointer"></p>
          </div>
        </Link>
        
        <Link href={"https://www.facebook.com/"} target="_blank">
          <div className="text-3xl m-1 hover:text-blue-700 flex text-blue-400">
            <FaFacebookSquare />
            <p className="text-lg pt-1 cursor-pointer"></p>
          </div>
        </Link>
       
      </div>
       {/* Download CV Button */}
       <div >
        <button className='font-mono font-bold h-10 w-36 rounded-xl bg-yellow-300'>Download CV</button>
      </div>
        </div>
      </div>
      </div>
    )
}
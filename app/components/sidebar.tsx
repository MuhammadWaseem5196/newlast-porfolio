import Typewriter from 'typewriter-effect';
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export function Sidebar() {
  return (
    <div className="flex flex-col h-screen p-3 items-center justify-center border-x-4 border-double border-[#133E87] bg-[#CBDCEB] ">
      
      {/* Profile Image */}
      <Image 
        src="/pictures/123.jpeg" 
        alt="profile-Pic" 
        width={150} 
        height={150} 
        className="rounded-lg border-4 border-double border-[#133E87]" 
      />
      
      {/* Typewriter Text */}
      <div className="mt-6 text-center font-serif">
        <h1 className="underline font-bold text-[#133E87]">Muhammad Waseem</h1>
        <Typewriter
          options={{
            strings: ['Web-Developer', 'UI/UX Designer', 'Full-Stack Developer', 'Digital-Marketing Exp'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    
      {/* Social Media Icons */}
      <div className="mt-8">
        <Link href={"#"}> 
          <div className="text-3xl m-1 hover:text-blue-700 flex text-blue-400">
            <FaLinkedin />
            <p className="text-lg pt-1 cursor-pointer">LinkedIn</p>
          </div>   
        </Link>
        
        <Link href={"https://www.youtube.com/"} target="_blank">
          <div className="text-3xl m-1 hover:text-red-700 flex text-red-500">
            <FaSquareYoutube />
            <p className="text-lg pt-1 cursor-pointer">YouTube</p>
          </div>
        </Link>
        
        <Link href={"https://www.facebook.com/"} target="_blank">
          <div className="text-3xl m-1 hover:text-blue-700 flex text-blue-400">
            <FaFacebookSquare />
            <p className="text-lg pt-1 cursor-pointer">Facebook</p>
          </div>
        </Link>
      </div>
      
      {/* Download CV Button */}
      <div className="mt-10 font-mono font-bold h-10 w-36 text-center pt-2 hover:bg-yellow-400 rounded-xl bg-yellow-300">
        <button>Download CV</button>
      </div>
    </div>
  );
}

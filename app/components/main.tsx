"use client"


import AOS from "aos"
import { useEffect } from "react"
import  "aos/dist/aos.css"
import {Sidebar} from "./sidebar"
import {Detail} from "./Detail"
import Mobilecard from "./mobilecomponents/mobilecard"
import Educationcard from "./mobilecomponents/educationcard"
import Skillcard from "./mobilecomponents/skillscard"
import Expirancecard from "./mobilecomponents/expirancecard"
import Projectcard from "./mobilecomponents/projectcard"


export default function Main(){

    useEffect(()=>{
       AOS.init({
        once:false,
       })
    },[])
    
    return(

     <div>
    
      {/*Mobile view */}
      
      <div className="md:hidden  flex flex-col w-[60] overflow-x-hidden  ">
        
         
         <Mobilecard/>
         <Educationcard/>
         <Skillcard/> 
         <Expirancecard/>
         <Projectcard/>
           
         
         </div>

      {/*Dekstop view */}


<div className="hidden md:flex md:overflow-hidden md:h-screen">

{/* Sidebar */}

   <div className="w-1/5">
     <Sidebar/>
   </div>


 {/* Details */}
    
    <div className="w-full">
     <Detail/>
    </div>

 </div>
   
   </div>
      
    )
}
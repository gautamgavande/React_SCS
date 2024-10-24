import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";




function Card2() {
    const [val,setval]=useState(false)

    return (
        <div className='w-full h-screen bg-zinc-300 flex justify-center items-center '>
            <div className='flex relative w-60 h-32 bg-zinc-500 rounded-md overflow-hidden'>
                <img className={`shrink-0 duration-300 transition-transform ${val === false ?"-translate-x-[0%]":"-translate-x-[100%]"} w-full h-full object-cover`} src="https://plus.unsplash.com/premium_photo-1728906299644-5e0397431595?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className={`shrink-0 duration-300 transition-transform ${val === false ?"-translate-x-[0%]":"-translate-x-[100%]"} w-full h-full object-cover`} src="https://images.unsplash.com/photo-1721332149274-586f2604884d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <span className='w-10 h-10 bg-[#dadadaad] flex items-center justify-center rounded-full absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <FaArrowRight onClick={()=>setval(()=>!val)} size={".8em"} />

                </span>
            </div>
        </div>
    )
}

export default Card2
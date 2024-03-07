import React, {useLayoutEffect, useRef, useState} from 'react'
import myself from '../assets/me.png'

function Home() {
  return (
    <div className="home w-full h-screen overflow-hidden relative z-[1] duration-300">
        <div className="rounded-full w-[500px] h-[500px] bg-[#bf9eff] absolute top-[-23%] z-[-1] left-[-16%]"></div>
        <div className="rounded-full w-[500px] h-[500px] bg-[#bf9eff] absolute bottom-[-14%] z-[-1] right-[-20%]"></div>
        <div className="rounded-full w-[500px] h-[500px] bg-[#a071ff] absolute bottom-[-35%] z-[-1] left-[-16%]"></div>
        <div 
            className="w-full flex justify-around items-center text-4xl"
        >
            <div className="
                    present ml-[70px] xl:text-start xl:bg-transparent xl:static absolute lg:top-[35%] bg-[#ffffff86] p-5 rounded-md text-center
                    md:top-[35%] sm:top-[20%] sm:left-5 top-[10%] text-[30px] right-16
                "
            >
                <p className='mb-2'>Hi,</p>
                <h1 className="md:text-7xl font-bold text-[#8C52FF] text-[40px] mb-2">I'm Thirapat Sisan</h1>
                <p className='mb-2'>Senior High school student</p>
                <p className='mb-5 sm:block hidden'>From Satreesiriket School, Sisaket Thailand</p>
                <div className="contact text-[#8C52FF] mb-9">
                    <a href="" className='mr-3'>
                        <i className='bx bxl-instagram text-[49px]' ></i>
                    </a>
                    <a href="">
                        <i className='bx bxl-facebook-circle text-[49px]' ></i>
                    </a>
                </div>
                <a     
                    href='#about'
                    className='
                        w-[300px] text-2xl font-bold bg-[#8C52FF] px-5 py-2 rounded-md text-white
                        hover:bg-[#582bb3] cursor-pointer
                    '
                >
                    Get to know
                </a>
            </div>
            <div className="img-container xl:block hidden">
                <img src={myself} alt="" className='w-[610px]'/>
            </div>
        </div>
    </div>
  )
}

export default Home
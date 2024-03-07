import React, {useState} from 'react'

function Nav() {
    const [navVisible, setNavVisible] = useState(false)
    const toggleNav = () => {
        setNavVisible(!navVisible)
        console.log(navVisible)
    }
    const mainColor = "#8C52FF #582bb3"
  return (
    <nav className='flex justify-between items-center py-2 h-[11vh] bg-white z-[2] fixed top-0 w-full'>
        <div className="main-icon md:text-4xl text-2xl font-bold flex items-center text-[#8C52FF] sm:ml-14 ">
            <a href="#home">
                <img src="/logo.svg" alt="" className='md:w-[99px] w-[60px]'/>
            </a>
            <h1>Portfolio</h1>            
        </div>
        <button className="menu lg:hidden block" onClick={toggleNav}>
            <i class='bx bx-menu text-5xl mr-5 text-[#8C52FF]' ></i>
        </button>
        <ul className={`nav text-2xl mr-10 font-semibold text-[#8C52FF] ${navVisible ? "translate-x-[0]" : "translate-x-[500%]"} absolute  bottom-[-130%] translate-x-[-500%] lg:translate-x-0 right-[-4%] lg:block lg:static text-white lg:text-[#8C52FF] duration-1000 lg:duration-1000 z-[-2]`}>
            <li className='lg:inline lg:hover:bg-transparent lg:w-auto mr-10 bg-[#8C52FF] lg:bg-transparent w-full text-center px-3 py-2 hover:bg-[#582bb3]'><a href="#home">Home</a></li>
            <li className='lg:inline lg:hover:bg-transparent lg:w-auto mr-10 bg-[#8C52FF] lg:bg-transparent w-full text-center px-3 py-2 hover:bg-[#582bb3]'><a href="#about">About</a></li>
            <li className='lg:inline lg:hover:bg-transparent lg:w-auto mr-10 bg-[#8C52FF] lg:bg-transparent w-full text-center px-3 py-2 hover:bg-[#582bb3]'><a href="#portfolio">Portfolio</a></li>              
        </ul>
    </nav>
  )
}

export default Nav
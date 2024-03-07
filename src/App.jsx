import './App.css'
import About from './components/About'
import Home from './components/Home'
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <>
    <div className="w-full h-screen relative">      
      <Nav />      
      <a id='home'></a> 
      <div className="h-[11vh]"></div>       
      <Home />      
      <a id='about'></a>    
      <div className="h-[11vh]"></div>     
      <About />
      <a id='portfolio'></a>
      <Portfolio />
    </div>       
    <footer className='fixed bottom-0 w-full bg-[#8C52FF] z-[5] text-white p-2 text-xl text-center flex justify-around'>
      <p>FB:TonPalm Thirapat </p>
      <p>IG:tonpalm_ptrs</p>
      <p>EMAIL:std35990@ssk.ac.th</p>
    </footer>       
    </>
  )
}

export default App

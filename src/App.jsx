
import { NavBar, Brand, CTa } from './componennts'
import { Footer, Blog, Posibility, Features, WhatGPT, Header } from './containers';


import './App.css'

function App() {
 

  return (
    <div className='App'> 
      <div className='gradient__bg'>
        <NavBar />
        <Header/>
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Posibility />
      <CTa />
      <Blog />
      <Footer/>
    </div>
  )
}

export default App

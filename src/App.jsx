import { useState } from 'react'
import Boton from './components/navbar'
import  MovieAPI from './components/movie'
import Logo from './assets/logo.png'
/* import Preview from './components/preview' */
function App() {


  return (
    
        <div className="App">
          <div className='header'>
          <div className="navbar">
            
            
          <img  className="logo" src={Logo} alt="logo"/>

          </div>
          </div>
          
            <MovieAPI/>
            
          <div></div>
        </div>
      
      
  )
}

export default App

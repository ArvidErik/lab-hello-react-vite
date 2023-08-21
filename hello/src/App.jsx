
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Advantages from './components/Advantages'

function App() {

  return (
    <div className='App'>
      <div className='marginer'>
        <Navbar />
        <Hero />
      </div>
        <Advantages />
    </div>
  )
}

export default App


import Logo from './assets/AlphaSquad.png'
import Numbers from './numbers';
import './App.css'

function App() {
  return (
    <div className="App">
      <section className="App-header h-full w-full px-5 md2:px-20 md:px-24 lg:px-32 xl:px-36">
        <div  className='w-full h-full flex flex-col items-center'>
          <img src={Logo} alt="" className='lg:pt-20'/>
          <Numbers />
        </div>
      </section>
    </div>
  )
}


export default App

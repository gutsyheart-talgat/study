import './App.css'
import Header from './components/Header'
import First from './components/First'
import Footer from './components/Footer'
import Second from './components/Second'
import Third from './components/Third'
import Fourth from './components/Fourth'
import Fifth from './components/Fifth'

function App() {
  return (
    <div>
        <div className='container'>
          <Header/>
          <First/>
          <Second/>
          <Third/>
          <Fourth/>
          <Fifth/>
        </div>
        <Footer/>
    </div>
    
    
  );
}

export default App;

import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from './components/Header'
import First from './components/First'
import Footer from './components/Footer'
import Second from './components/Second'
import SecondSlide from './components/SecondSlide'
import SecondSlides from './components/SecondSlides'
import Third from './components/Third'
import ThirdSlide from './components/ThirdSlide'
import Fourth from './components/Fourth'
import Fifth from './components/Fifth'

function App() {
  
  return (
    <div className="appBack">
        <div className='container'>
          <Header/>
          <First/>
          <div className="Second">
            <Second/>
          </div>
          <div className="secondSlide">
            <SecondSlide/>
          </div>
          <div className="secondSlides">
            <SecondSlides/>
          </div>
          <div className='Third'>
            <Third/>
          </div>
          <div className='third-slider'>
            <ThirdSlide/>
          </div>
          <Fourth/>
          <Fifth/>
        </div>
        <Footer/>
        
    </div>
    
    
  );
}

export default App;

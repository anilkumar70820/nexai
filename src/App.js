import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NexaiExamples from './components/NexaiExamples';
import Blockchain from './components/Blockchain';
import Footer from './components/Footer';
import Utility from './components/Utility';
import AboutAi from './components/AboutAi';
import NexaiToken from './components/NexaiToken';
import UniqueFeature from './components/UniqueFeature';
import Hero from './components/Hero';
import AiAssistant from './components/AiAssistant';
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import BackToTop from './components/BackToTop';
import 'aos/dist/aos.css'
import Aos from 'aos';
function App() {
  const [preloader, setPreloader] = useState(true)
  useEffect(() => {
    Aos.init({once:true,})
setTimeout(()=>{
  setPreloader(false);
  document.body.classList.remove('overflow-hidden')

},3000);
document.body.classList.add('overflow-hidden')
  }, [])
  
  return (
    <>
    {preloader && <Preloader/>}
      <Hero />
      <AiAssistant />
      <UniqueFeature />
      <Blockchain />
      <NexaiExamples />
      <AboutAi />
      <NexaiToken />
      <Utility />
      <Footer />
      <BackToTop/>
    </>
  );
}

export default App;

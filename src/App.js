import React,{useEffect} from "react";
import "./styles/App.scss";
import Header from "./components/header";
import Banner from "./components/banner";
import Info from "./components/info";
import DownloadSection from "./components/downloadSection";
import WhoSection from "./components/whoSection";
import Vanihla from "./components/vanihla";
import Testimonial from "./components/testimonial";
import Community from "./components/community";
import Faq from "./components/faq";
import Footer from "./components/footer";
import IntroOverlay from './components/IntroOverlay';
import gsap from "gsap";

function App() {
  
  useEffect(() => {
    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh',`${vh}px`);


    let tl = gsap.timeline();
    tl.from(".banner-title span", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3
      }
    })
      // .to(".overlay-top", 1.6, {
      //   height: 0,
      //   ease: "expo.inOut",
      //   stagger: 0.4
      // })
      // .to(".intro-overlay", 0, {
      //   css: { display: "none" }
      // });
      
  }, []);


  return (
    <div className='App'>
      <IntroOverlay />
      <Header />
      <Banner />
      <Info />
      <DownloadSection />
      <WhoSection />
      <Vanihla />
      <Testimonial />
      <Community />
      <Faq /> 
      <Footer />
    </div>
  );
}

export default App;

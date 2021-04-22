import React from 'react';
import {ReactComponent as RightArrow} from "../assets/arrow-right.svg";
import marquee1 from "../assets/marquee1.png";
import marquee2 from "../assets/marquee2.png";
import marquee3 from "../assets/marquee3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const marqueeImages = [
    {
        id:1, 
        title:"First one",
        img:'marquee1' 
    },
    {
        id:2, 
        title:"Second one",
        img:'marquee2' 
    },
    {
        id:3, 
        title:"Third one",
        img:'marquee3' 
    },

]
const settings = {
    dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  vertical: true,
  verticalSwiping: true,
  speed: 5000,
  autoplaySpeed: 5000,
  cssEase: "linear",
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: false,
  verticalSwiping: false,
      }
    },
    {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          vertical: false,
    verticalSwiping: false,
        }
      }
  ]
  };
const Info = () => {
    return (
        <div className="whiteBackground">
        <div className="container">
            <div className="info">
                <div className="info-left">
                    <div className="left-top">
                    <h1>Become the next gen
                   Product Designer</h1>
                   <p>Learn the in’s & out’s of creating digital products.
                       Enhance user experience and create aesthecally
                       pleasing interfaces. 
                    </p>
                    </div>
                  

                    <div className="info-bottom">
                        <div className="info-classes">
                            <h2 className="info-subtitle">Live classes</h2>
                            <a className="green-link"> Reserve my spot <RightArrow/></a>
                        </div>
                        <div className="info-video">
                            <h2 className="info-subtitle">Video masterclass</h2>
                            <span className="dark-banner">Coming soon</span>
                        </div>
                    </div>
                </div>
                <div className="info-right">
                    {/* <div className="marquee">
                        {marqueeImages.map(marquee => (
                            <img src={require(`../assets/${marquee.img}.png`)} alt={marquees.title}/>
                        ))}
                    </div> */}
                    <Slider {...settings}>
            <div>
             <div className="marquee">  
              <img src={marquee1} alt="marquee 1"/>
             </div> 
            </div>
            <div>
             <div className="marquee">  
              <img src={marquee2} alt="marquee 2"/>
             </div> 
            </div>
            <div>
             <div className="marquee">  
              <img src={marquee3} alt="marquee 3"/>
             </div> 
            </div>
            <div>
             <div className="marquee">  
              <img src={marquee1} alt="marquee 1"/>
             </div> 
            </div>
          </Slider>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Info;
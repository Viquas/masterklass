import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const faces = [
    {
        id:1, 
        title:"Face Com",
        img:'face_1' 
    },
    {
        id:2, 
        title:"Face Com",
        img:'face_2' 
    },
    {
        id:3, 
        title:"Face Com",
        img:'face_3' 
    },
    {
        id:4, 
        title:"Face Com",
        img:'face_4' 
    },
    {
        id:5, 
        title:"Face Com",
        img:'face_5' 
    },
    {
        id:6, 
        title:"Face Com",
        img:'face_6' 
    },
    {
        id:7, 
        title:"Face Com",
        img:'face_7' 
    },
    {
        id:8, 
        title:"Face Com",
        img:'face_8' 
    },
    {
        id:9, 
        title:"Face Com",
        img:'face_9' 
    }

]
const settings = {
    infinte:true,
    dots: false,
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 4000,
  cssEase: "linear",
  arrows:false,
  pauseOnHover: false,
  responsive: [
    {
        breakpoint: 1824,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
  };
const Community = () => {
    return (
        <div className="pistaBackground">
        <div className="container">
            <div className="community">
            <Slider {...settings}>
              {faces.map(face => (
                <div className="slick-slide" >
                <img className="slick-slide-image" alt={face.title} 
                src={require(`../assets/community/${face.img}.png`)}
               />
              </div>
              ))}
</Slider>
        <h1 >
        Let’s create a kickass design community
        </h1>
        <button>Claim your spot</button>
            </div>  
        </div>
        </div>
    )
}

export default Community;

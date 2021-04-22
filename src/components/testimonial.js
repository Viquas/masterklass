import React, {Component} from 'react';
import stephen from "../assets/stephen.png";
import santana from "../assets/santana.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Testimonial extends Component  {
    constructor(props) {
        super(props);
        this.state = {
          nav1: null,
          nav2: null,
          nav3: null
        };
      }
      componentDidMount() {
        this.setState({
          nav1: this.slider1,
          nav2: this.slider2,
          nav3: this.slider3
        });
      }

    render() {
    return (
        <div className="fullWidthDark">
            <div className="ts">
                <div className="ts-media">
                <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          swipeToSlide={false}
          arrows={false}
          draggable={false}
        >
          <div>
          <div className='client__image' style={{'backgroundImage': `url(${stephen})`}} />
          </div>
          <div>         
            <div className='client__image' style={{'backgroundImage': `url(${santana})`}} />
           
          </div>
          <div>
          <div className='client__image' style={{'backgroundImage': `url(${stephen})`}} />
          
          </div>
        </Slider>
                </div>
                <div className="ts-quote">
                    <div className="quotes">
                    <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={1}
          swipeToSlide={true}
          arrows={false}
          draggable={false}
          fade={true}
          
        >
          <div>
            <p className="white-text">I interned for Vanihla, and the amount of knowledge I gained helped
me kickstart my career. I’m now a lead designer at Lollypop Studios.</p>
          </div>
          <div>
          <p>I also interned for Vanihla, and the amount of knowledge I gained helped
me kickstart my career. I’m now a lead designer at smoking cigrattes. Ain't its cool. Looking for meth for my future</p>
          </div>
          <div>
          <p>I also interned for Vanihla, and the amount of knowledge I gained helped
me kickstart my career. I’m now a lead designer at smoking cigrattes. Ain't its cool. Looking for meth for my future</p>
          </div>
       
        </Slider>
                    </div>
                    <div className="client-details">
                    <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider3 = slider)}
          slidesToShow={1}
          swipeToSlide={true}
          arrows={false}
          autoplay= {true}
          speed={1000}
          autoplaySpeed= {4000}
        >
          <div>
           <div className="client-name">Stephen Gustavo</div>
           <div className="client-details">
                Lead UI Designer <span></span>
              Lollypop Design Studio
           </div>
          </div>
          <div>
          <div className="client-name">Santana </div>
           <div className="client-details">
               Lead Smoker <span></span> 
                Thug life
           </div>
          </div>
          <div>
          <div className="client-name">Santana </div>
           <div className="client-details">
            Lead Smoker <span></span> 
                Thug life
           </div>
          </div>
       
        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Testimonial;
import React, {Component} from 'react';
import BannerVideo from "../assets/bannervid.mp4";
import { ReactComponent as Mouse } from "../assets/mouse.svg";

const Banner = () => {
    return (
        <div className="container">
            <div className="banner">
                <div className="banner-left">
                    <h2>
                    <div className="banner-title">
                       <span> Get early access to the </span>
                    </div>
                    <div className="banner-title">
                       <span> Design MasterKlass</span>
                    </div>
                    </h2>
                    <div className="banner-input">
                        <input placeholder="Enter your email address"></input>
                        <button>Reserve seat</button>
                    </div>
                    <div className="scroll-box">
                        <Mouse />
                        <span>Scroll to view detail</span>
                    </div>
                </div>
                <div className="banner-right">
                    <video loop autoPlay muted>
                    <source src={BannerVideo} type="video/mp4" />
                    </video>
                
                </div>
            </div>
        </div>
    )
}

export default Banner;
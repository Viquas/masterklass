import React from 'react';
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg"
import instagram from "../assets/instagram.png";
import vanihlaLogo from "../assets/vanihla.png";
import BannerVideo from "../assets/bannervid.mp4";


const Vanihla = () => {
    return (
        <div className="fullWidthWhite">
            <div className="vs">
                <div className="vs-left">
                    <div className="vs-left-top">
                        <h1>Who we are?</h1>
                        <h3>We’re Vanihla, a full fledged design studio.
                        Check out our video to assure yourself that
                        you’re in the right hands.
                        </h3>
                        <img src={vanihlaLogo} />
                        <p>
                            <img src={instagram} />
                             Check out our Instagram handle
                          <RightArrow className="r-arrow" stroke="#425DFF" />
                            </p>
                        </div>
                </div>
                <div className="ws-right">
                <video loop autoPlay muted>
                    <source src={BannerVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Vanihla;
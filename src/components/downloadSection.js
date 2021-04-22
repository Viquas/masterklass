import React from 'react';
import {ReactComponent as RightArrow} from "../assets/arrow-right.svg"

const usp = [
    {
        id: 1,
        title: "User centered design",
        img: 'user'
    },
    {
        id: 2,
        title: "Stunning user interfaces",
        img: 'interface'
    },
    {
        id: 3,
        title: "Basics of interaction design",
        img: 'interaction'
    },
    {
        id: 4,
        title: "How to get your next job/gig",
        img: 'job'
    }

]
const DownloadSection = () => {
    return (
        <div className="whiteBackground">
            <div className="container">
                <div className="ds">
                    <div className="ds-left">
                        <div className="ds-top">
                            <h1>What's in it?</h1>
                            <p>Everything to get you <br />
                      JOB READY!
                    </p>
                        </div>


                        <div className="ds-left-bottom">
                            {usp.map(point => (
                                <div className="ds-points">
                                    <span className="ds-iconBox">
                                        <img src={require(`../assets/${point.img}.svg`)} alt={point.title} />
                                    </span>
                                    <h3>{point.title}</h3>
                                </div>

                            ))}
                        </div>
                    </div>
                    <div className="ds-right">
                        <h1>Download the course itenary</h1>
                        <h3>Get in-depth understanding of
                        what exactly you will be learning
                        with this masterclass
                        </h3>
                        <button>
                            Download 
                            <RightArrow />    
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadSection;
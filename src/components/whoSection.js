import React from 'react';

const batches = [
    {
        id: 1,
        title: "Basic",
        detail: "You don’t have any prior knowledge in designing apps / websites",
        prerequiste: "Proficient in using a system"
    },
    {
        id: 2,
        title: "Advanced",
        detail: "You’re already a designer looking to polish your craft and reach the next level",
        prerequiste: "A UI/UX/Product Designer"
    }

]
const WhoSection = () => {
    return (
        <div className="whiteBackground">
            <div className="container">
                <div className="ws">
                    <div className="ws-left">
                        <div className="ws-left-top">
                            <h1>Meet talented designers</h1>
                            <h3>Be a part of our design community.
                            Get access to our discord group,
                            where you get to interact with our
                            design network and other students
                            </h3>
                            <p>Get valuable insights and feedback on your design</p>
                        </div>

                    </div>
                    <div className="ws-right">
                        <div className="ws-top-right">
                            <h1>Who is this for?</h1>
                            <h3>Whoever you are, there is something just right for you
                        </h3>
                        </div>
                        <div className="batchSection">
                            {batches.map(batch => (
                                <div className="batch">
                                    <div className="badge">{`#Batch${batch.id}`}</div>
                                    <h2 className={`title${batch.id}`}>
                                        {batch.title}
                                    </h2>
                                    <p className={`detail${batch.id}`}>
                                        {batch.detail}
                                    </p>
                                    <div className={`prerequiste${batch.id}`}>
                                        Must be <br />
                                        <span>{batch.prerequiste}</span>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoSection;
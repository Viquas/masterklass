import React, { useEffect, useState } from 'react';
import Faq from "react-faq-component";

const offers = [
  {
    id: 1,
    title: "Advanced MasterKlass",
    details: 'Free lifetime access to the advanced MasterKlass video classes and membership portal'
  },
  {
    id: 2,
    title: "Free UI Kits forever!",
    details: 'UI Kits are design templates with components that you could re-use in your projects'
  },
  {
    id: 3,
    title: "Free Portfolio templates",
    details: 'Free templates to showcase your work to recruiters, social media, future employers and potential clients'
  },
]

const data = {
  
  rows: [
    {
      title: "Do I need to learn development to get started?",
      content: `Simple answer is, No. We are teaching you how to solve complex user problems
      through the lens of design. Knowledge in development does help but not necessarily
      mandatory. What matters is, how you hand over your design to the developers`,
    },
    {
      title: "Is my job guaranteed?",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "What’s the course duration?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "Will I be getting real projects?",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title: "What tools do I need to get started?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "Am I eligible to take up this course?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "How much will I earn as a designer?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "Do I get course certificates?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "black",
  rowTitleColor: "#000000",
  rowContentColor: "#9B9B9B",
  rowContentTextSize: '15px',
  rowContentPaddingTop: '12px',
  rowContentPaddingBottom: '12px',
  // arrowColor: "red",
};

const config = {
  animate: true,
  arrowIcon: " ",
  tabFocus: true
};

const FaqComp = () => {
  const [rows, setRowsOption] = useState(null);
useEffect(() => {
  if (rows) {
      setTimeout(() => {
          rows[0].expand();
          if( rows[0].expand()){
            console.log('expanded');
          }
      }, 2500);
  }
}, [rows]);
  return (
    <div className="whiteBackground">
      <div className="container">
        <div className="offers">
          <h1>Limited to the first 50 members</h1>
          <div className="offer-bottom">
            {offers.map(offer => (
              <div className="o-points">
                <div className="number">{offer.id}</div>
                <h3>{offer.title}</h3>
                <p className="detail">{offer.details}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="faq-zone">
          <div className="faq-left">
              <div className="gray-text">FAQs</div>
              <h1>Here to answer all your queries</h1>
          </div>
          <div className="faq-right">
            <Faq
              data={data}
              styles={styles}
              config={config}
              getRowOptions={setRowsOption}
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default FaqComp;
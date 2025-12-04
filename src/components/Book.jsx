import React, { useState, useEffect } from 'react'
import HTMLFlipBook from "react-pageflip";
 

function Book() {

  const journalEntries = [
    {
      id: "01",
      date: "01/05/23",
      description: "It’s been 4 days since my last argument with dad."
    },
    {
      id: "02",
      date: "01/17/23",
      description: "When Pikachu meet, they touch tails to exchange electricity as a greeting."
    },
    {
      id: "03",
      date: "01/18/23",
      description: "Often kept at power plants to regulate electricity. Competes with others to attract lightning during storms."
    },
    {
      id: "04",
      date: "01/19/23",
      description: "Despite looking like a tree, its body is more like rock. Hates water and hides when it rains."
    },
    {
      id: "05",
      date: "1/20/23",
      description: "Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario."
    },
    {
      id: "06",
      date: "1/21/23",
      description: "Creates throwing stars from compressed water that can slice through metal when thrown at high speed."
    }
  ];

  return (
    <HTMLFlipBook 
      width={370} 
      height={500}
      maxShadowOpacity={0.5}
      drawShadow={true}
      showCover={true}
      size='fixed'
    >
      <div className="page" style={{ background: 'transparent' }}>
        <div className="page-content cover">
        </div>
      </div>

      <div className="page">
        <div className="page-content" style={{ position: 'relative', justifyContent: 'flex-start', paddingTop: '50px' }}>
            <div className="entry-container">
                <div className="entry-info" style={{ color: 'black', fontSize: '12px' }}>
                    <div className="in-case-of-loss">
                        <p>In case of loss, please return to: </p>
                        <p style={{ marginBottom: '20px' }}>Feileen Li</p>
                        <p>As a reward: $0.1</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {journalEntries.map((entry) => (
        <div className="page" key={entry.id}>
          <div className="page-content" style={{ position: 'relative' }}>
            <p className="entry-date" style={{ position: 'absolute', top: '20px', left: '20px', margin: 0 }}>
              {entry.date}
            </p>
            <div className="entry-container">
              {/* <img 
                src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${pokemon.id}.png`} 
                alt={entry.name} 
              /> */}
              <div className="entry-info">
                <p className="entry-description">{entry.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

    </HTMLFlipBook>
  );
}

export default Book

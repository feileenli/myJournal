import React, { useState, useEffect } from 'react'
import HTMLFlipBook from "react-pageflip";
 

function Book() {

  const journalEntries = [
    {
      id: "01",
      name: "Charizard",
      types: ["Fire", "Flying"],
      description: "Flies in search of strong opponents. Breathes extremely hot fire that melts anything, but never uses it on weaker foes."
    },
    {
      id: "02",
      name: "Pikachu",
      types: ["Electric"],
      description: "When Pikachu meet, they touch tails to exchange electricity as a greeting."
    },
    {
      id: "03",
      name: "Electabuzz",
      types: ["Electric"],
      description: "Often kept at power plants to regulate electricity. Competes with others to attract lightning during storms."
    },
    {
      id: "04",
      name: "Sudowoodo",
      types: ["Rock"],
      description: "Despite looking like a tree, its body is more like rock. Hates water and hides when it rains."
    },
    {
      id: "05",
      name: "Lucario",
      types: ["Fighting", "Steel"],
      description: "Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario."
    },
    {
      id: "06",
      name: "Greninja",
      types: ["Water", "Dark"],
      description: "Creates throwing stars from compressed water that can slice through metal when thrown at high speed."
    },
    {
      id: "07",
      name: "Darkrai",
      types: ["Dark"],
      description: "A legendary Pokémon that appears on moonless nights, putting people to sleep and giving them nightmares."
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
        <div className="page-content">
            <div className="entry-container">
                <div className="entry-info">
                    <p>In case of loss, please return to: </p>
                    <p>As a reward: $</p>
                </div>
            </div>
        </div>
      </div>

      {journalEntries.map((entry) => (
        <div className="page" key={entry.id}>
          <div className="page-content">
            <div className="entry-container">
              {/* <img 
                src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${pokemon.id}.png`} 
                alt={entry.name} 
              /> */}
              <div className="entry-info">
                <h2 className="entry-name">{entry.name}</h2>
                <p className="entry-number">#{entry.id}</p>
                <div>
                  {entry.types.map((type) => (
                    <span key={type} className={`entry-type type-${type.toLowerCase()}`}>
                      {type}
                    </span>
                  ))}
                </div>
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

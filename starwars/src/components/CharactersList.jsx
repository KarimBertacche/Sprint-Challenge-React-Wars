import React from 'react';
import Character from './Character';
import './StarWars.css';
import uuid from "uuid";
import luke from '../images/luke-skywalker.jpeg';
import C3PO from '../images/C-3PO.webp';
import R2D2 from '../images/r2-d2.jpeg';
import dartVader from '../images/Darth-Vader.jpeg';
import leiaOrgana from '../images/Leia-Organa.jpg';
import owenLars from '../images/owenlars.jpeg';
import beruLars from '../images/berulars.webp';
import R5D4 from '../images/r5-d4.webp';
import biggsDark from '../images/BiggsDarklighter.webp';
import obiOne from '../images/Obi-Wan-Kenobi.jpeg';

const images = [luke, C3PO, R2D2, dartVader, leiaOrgana, owenLars, beruLars, R5D4, biggsDark, obiOne];

function CharactersList(props) {
    return(
      <div className="char-list">
        { 
          props.dataList.map((dataItem, idx) => {
            return <Character key={uuid()} data={dataItem} image={images[idx]}/>
          })    
        }      
      </div>
    );
}

export default CharactersList;
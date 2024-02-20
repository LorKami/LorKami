import React, { useState } from 'react';
import { MagicMotion } from 'react-magic-motion';
import { MagicCard } from "react-magic-motion";
import "react-magic-motion/card.css";
import './GaleriaSearch.css'

import { FaTag } from "react-icons/fa";

function ExpandableImage({ imgSrc, isExpanded, onClick }) {
  const fileNameWithoutExtension = imgSrc.split('/').pop().split('.')[0];
  const containerClassName = isExpanded ? 'image-container expanded' : 'image-container';
  const fileInfoClassName = isExpanded ? 'file-info expandedJustify' : 'file-info';
  return (

    <div onClick={onClick} className={isExpanded ? 'ImageExpandSection' : ''}>

      <div className={containerClassName}>
        <div className={fileInfoClassName}>
          <span className={`file-name ${isExpanded ? 'expandedInfo' : ''}`}>{fileNameWithoutExtension}</span>
        </div>
        <div>
          <img
            key={imgSrc}
            alt={`image`}
            src={imgSrc}
            loading="lazy"
            className={isExpanded ? 'expanded' : 'noexpanded'}
          />
        </div>
      </div>
    </div>
  );
}

const GaleriaSearch = ({ searchText, images }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpanded = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };


  return (
    <div className="GaleriaSearch">
      <div className='GaleriaEtiquetas'>
        <span><FaTag style={{ verticalAlign: 'middle' }} size='0.6rem' /> REDM</span>
        <span><FaTag style={{ verticalAlign: 'middle' }} size='0.6rem' /> LEJANO OESTE</span>
        <span><FaTag style={{ verticalAlign: 'middle' }} size='0.6rem' /> CANTARES</span>
        <span><FaTag style={{ verticalAlign: 'middle' }} size='0.6rem' /> FRONTERA</span>
        <span><FaTag style={{ verticalAlign: 'middle' }} size='0.6rem' /> FIVEM</span>
        <span><FaTag style={{ verticalAlign: 'middle' }} size='0.6rem' /> BACKV</span>
        <span><FaTag style={{ verticalAlign: 'middle' }} size='0.6rem' /> NEGROS</span>
        <span><FaTag style={{ verticalAlign: 'middle' }} size='0.6rem' /> BOMBEROS</span>
        <span><FaTag style={{ verticalAlign: 'middle' }} size='0.6rem' /> URBANPULSE</span>
        <span><FaTag style={{ verticalAlign: 'middle' }} size='0.6rem' /> VIVA CHILE</span>
        <span><FaTag style={{ verticalAlign: 'middle' }} size='0.6rem' /> FORTNITE</span>
        <span><FaTag style={{ verticalAlign: 'middle' }} size='0.6rem' /> SEA OF THIEVES</span>
        <span><FaTag style={{ verticalAlign: 'middle' }} size='0.6rem' /> MINECRAFT</span>
        <span><FaTag style={{ verticalAlign: 'middle' }} size='0.6rem' /> OTROS</span>
      </div>


      <div className="GaleriaSearchImages">
        {images
          .filter((imgSrc) =>
            imgSrc.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((imgSrc, index) => (
            <MagicCard
              key={index}
              isCardExpanded={expandedIndex === index}
              onBackgroundFadeClick={() => setExpandedIndex(null)}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <ExpandableImage
                imgSrc={imgSrc}
                isExpanded={expandedIndex === index}
                onClick={() => toggleExpanded(index)}
              />
            </MagicCard>
          ))}
      </div>

    </div>
  );
};

export default GaleriaSearch;

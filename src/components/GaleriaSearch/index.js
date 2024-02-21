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

  const containsVideo = fileNameWithoutExtension.toLowerCase().includes('video');

  let videoUrl = '';
  // Define the video URL based on the filename
  if (containsVideo) {
    if (fileNameWithoutExtension.toLowerCase().includes('video15')) {
      videoUrl = 'https://www.youtube.com/embed/ri8N2az8wh4?si=3CHJHRHMxYoNJOnk';
    } else if (fileNameWithoutExtension.toLowerCase().includes('video14')) {
      videoUrl = 'https://www.youtube.com/embed/qVOK4mOnCtw?si=KXjVge65QD6m8ZGZ';
    } else if (fileNameWithoutExtension.toLowerCase().includes('video13')) {
      videoUrl = 'https://www.youtube.com/embed/PILzFWZY7g0?si=_x1cDET5EdZ6-4ae';
    } else if (fileNameWithoutExtension.toLowerCase().includes('video12')) {
      videoUrl = 'https://www.youtube.com/embed/2QWhmajgJ2U?si=BvQ27ocnkSVIbCyd';
    } else if (fileNameWithoutExtension.toLowerCase().includes('video11')) {
      videoUrl = 'https://www.youtube.com/embed/JvktDizk8rI?si=7g-7LQmjVIVVXTPn';
    } else if (fileNameWithoutExtension.toLowerCase().includes('video10')) {
      videoUrl = 'https://www.youtube.com/embed/heiI6hv3xwo?si=rS6BMfzclS5kBT1a';
    } else if (fileNameWithoutExtension.toLowerCase().includes('video9')) {
      videoUrl = 'https://www.youtube.com/embed/Aqb_jPMg5p0?si=Q_hf-_JFDYU1k39c';
    } else if (fileNameWithoutExtension.toLowerCase().includes('video8')) {
      videoUrl = 'https://www.youtube.com/embed/JkuPLo0wijM?si=3EiyvZ8QQ_YZUgAb';
    } else if (fileNameWithoutExtension.toLowerCase().includes('video7')) {
      videoUrl = 'https://www.youtube.com/embed/Dr405-mVPA4?si=NSxv4mdJf-S7qP8g';
    } else if (fileNameWithoutExtension.toLowerCase().includes('video6')) {
      videoUrl = 'https://www.youtube.com/embed/MTEf62pGzfI?si=Qgsr-Vf6jV6fjlla';
    } else if (fileNameWithoutExtension.toLowerCase().includes('video5')) {
      videoUrl = 'https://www.youtube.com/embed/pe5HSPPaZno?si=TM3iYS50KW14pmHr';
    } else if (fileNameWithoutExtension.toLowerCase().includes('video4')) {
      videoUrl = 'https://www.youtube.com/embed/6o4O0NiQtJQ?si=82ULYULYA8QwzX_z';
    } else if (fileNameWithoutExtension.toLowerCase().includes('video3')) {
      videoUrl = 'https://www.youtube.com/embed/YAJppuzodC4?si=yDax_CN3IklKByCF';
    } else if (fileNameWithoutExtension.toLowerCase().includes('video2')) {
      videoUrl = 'https://www.youtube.com/embed/L8C9ljIohsk?si=1hEYIW_jwU1t6zA3';
    } else if (fileNameWithoutExtension.toLowerCase().includes('video1')) {
      videoUrl = 'https://www.youtube.com/embed/EUBYgIvqZck?si=dN7ytwiPf2qNvM-u';
    } else {
      // Default video URL
      videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=sGYc_0ngkhP8ihbU';
    }
  }

  return (

    <div onClick={onClick} className={isExpanded ? 'ImageExpandSection' : ''}>

      <div className={containerClassName}>
        <div className={fileInfoClassName}>
          <span className={`file-name ${isExpanded ? 'expandedInfo' : ''}`}>{fileNameWithoutExtension}</span>
        </div>

        <div className="media-container">
          {containsVideo && isExpanded && (

            <iframe
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={isExpanded ? 'expanded' : 'noexpanded'}
            ></iframe>
          )}

          <img
            key={imgSrc}
            alt={`image`}
            src={imgSrc}
            loading="lazy"
            className={isExpanded && !containsVideo ? 'expanded' : 'noexpanded'}
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
        <span><FaTag style={{ verticalAlign: 'middle' }} size='0.6rem' /> VIDEO</span>
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

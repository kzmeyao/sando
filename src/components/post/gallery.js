import React from 'react';
import LazyImage from '../common/LazyImage';

import './gallery.css';

const Gallery = ({ imagePrefix, images }) => {
  const imageRows = images.split(',');

  return (
    <div className="image-gallery">
      {imageRows.map(row => {
        if (row.includes('|')) {
          const [firstImg, secondImg] = row.split('|');
          return (
            <div key={row} className="pure-g image-pair">
              <div className="pure-u-1-2">
                <LazyImage relSrc={`${imagePrefix}-${firstImg}`} />
              </div>
              <div className="pure-u-1-2">
                <LazyImage relSrc={`${imagePrefix}-${secondImg}`} />
              </div>
            </div>
          );
        }

        return (
          <div key={row} className="pure-g">
            <div className="pure-u-1">
              <LazyImage relSrc={`${imagePrefix}-${row}`} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;

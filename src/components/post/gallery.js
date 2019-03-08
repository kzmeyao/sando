import React from 'react';
import './gallery.css';

const Gallery = ({ imagePrefix, images }) => {
  const imageRows = images.split(',');

  return (
    <div className="image-gallery">
      {imageRows.map(row => {
        if (row.includes('|')) {
          const ids = row.split('|');
          return (
            <div className="pure-grid image-pair">
              <div className="pure-u-1-2">
                <img
                  src={`https://res.cloudinary.com/sando/image/upload/${imagePrefix}-${
                    ids[0]
                  }`}
                />
              </div>
              <div className="pure-u-1-2">
                <img
                  src={`https://res.cloudinary.com/sando/image/upload/${imagePrefix}-${
                    ids[1]
                  }`}
                />
              </div>
            </div>
          );
        }

        return (
          <div className="pure-grid">
            <div className="pure-u-1">
              <img
                src={`https://res.cloudinary.com/sando/image/upload/${imagePrefix}-${row}`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;

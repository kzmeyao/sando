import React from 'react';
import LazyImage from '../common/LazyImage';

const Gallery = ({ imagePrefix, images }) => {
  const imageRows = images.split(',');

  return (
    <div>
      {imageRows.map(row => {
        if (row.includes('|')) {
          const [firstImg, secondImg] = row.split('|');
          return (
            <div key={row} className="flex pb-2">
              <div className="w-1/2 pr-2">
                <LazyImage relSrc={`${imagePrefix}-${firstImg}`} />
              </div>
              <div className="w-1/2 pl-2">
                <LazyImage relSrc={`${imagePrefix}-${secondImg}`} />
              </div>
            </div>
          );
        }

        return (
          <div key={row} className="flex pb-2">
            <div>
              <LazyImage relSrc={`${imagePrefix}-${row}`} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;

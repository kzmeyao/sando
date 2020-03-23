import React, { useState } from 'react';

import LazyImage from '../common/LazyImage';
import { PhotoSwipeWrapper } from '../common/PhotoSwipe';

const imgPath = 'https://res.cloudinary.com/sando/image/upload/';

const Gallery = ({ imagePrefix, images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const imageRows = images.split(',');

  const handleOpen = index => {
    setIsOpen(true);
    setIndex(index);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  let items = imageRows.reduce((acc, current) => {
    if (current.includes('|')) {
      return [...acc, ...current.split('|')];
    } else {
      return [...acc, current];
    }
  }, []);
  items = items.map(item => ({
    src: `${imgPath}${imagePrefix}-${item}`,
    w: 840,
    h: 541
  }));

  return (
    <>
      <div>
        {imageRows.map(row => {
          if (row.includes('|')) {
            const [firstImg, secondImg] = row.split('|');
            return (
              <div key={row} className="flex pb-2">
                <div className="w-1/2 pr-1">
                  <LazyImage
                    isVertical={true}
                    relSrc={`${imagePrefix}-${firstImg}`}
                    onClick={() => handleOpen(0)}
                  />
                </div>
                <div className="w-1/2 pl-1">
                  <LazyImage
                    isVertical={true}
                    relSrc={`${imagePrefix}-${secondImg}`}
                    onClick={() => handleOpen(0)}
                  />
                </div>
              </div>
            );
          }

          return (
            <div key={row} className="flex pb-2">
              <LazyImage
                relSrc={`${imagePrefix}-${row}`}
                onClick={() => handleOpen(0)}
              />
            </div>
          );
        })}
      </div>
      <PhotoSwipeWrapper
        isOpen={isOpen}
        index={index}
        items={items}
        onClose={handleClose}
      />
    </>
  );
};

export { Gallery };

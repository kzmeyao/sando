import React, { useState } from 'react';

import LazyImage from '../common/LazyImage';
import { PhotoSwipeWrapper } from '../common/PhotoSwipe';

const IMG_PATH = 'https://res.cloudinary.com/sando/image/upload/';
const TRANSFORM_PATH = 't_scale_80/';
const IMAGE_LONG_EDGE = 1200;
const IMAGE_SHORT_EDGE = 801;

const Gallery = ({ imagePrefix, images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleOpen = index => {
    setIsOpen(true);
    setIndex(index);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const items = images.split(',').reduce((acc, current) => {
    if (current.includes('|')) {
      const [firstImg, secondImg] = current.split('|');
      return [
        ...acc,
        {
          src: `${IMG_PATH}${imagePrefix}-${firstImg}`,
          msrc: `${IMG_PATH}${TRANSFORM_PATH}${imagePrefix}-${firstImg}`,
          w: IMAGE_SHORT_EDGE,
          h: IMAGE_LONG_EDGE,
          vpad: 'r'
        },
        {
          src: `${IMG_PATH}${imagePrefix}-${secondImg}`,
          msrc: `${IMG_PATH}${TRANSFORM_PATH}${imagePrefix}-${secondImg}`,
          w: IMAGE_SHORT_EDGE,
          h: IMAGE_LONG_EDGE,
          vpad: 'l'
        }
      ];
    } else {
      return [
        ...acc,
        {
          src: `${IMG_PATH}${imagePrefix}-${current}`,
          msrc: `${IMG_PATH}${TRANSFORM_PATH}${imagePrefix}-${current}`,
          w: IMAGE_LONG_EDGE,
          h: IMAGE_SHORT_EDGE
        }
      ];
    }
  }, []);

  return (
    <>
      <div>
        {items.map((image, index) => {
          const { msrc, src, vpad } = image;
          if (vpad) {
            return (
              <div key={src} className={`w-1/2 p${vpad}-1 inline-block`}>
                <LazyImage
                  isVertical={true}
                  src={msrc}
                  onClick={() => handleOpen(index)}
                />
              </div>
            );
          }

          return (
            <div key={src} className="w-full pb-2">
              <LazyImage src={msrc} onClick={() => handleOpen(index)} />
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

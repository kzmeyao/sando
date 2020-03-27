import React, { useState } from 'react';

import LazyImage from '../common/LazyImage';
import { PhotoSwipeWrapper } from '../common/PhotoSwipe';
import { IMAGE_PATH } from '../../constants';

const TRANSFORM_PATH = 't_scale_80';
const IMAGE_LONG_EDGE = 1080 * 0.8;
const IMAGE_SHORT_EDGE = 721 * 0.8;
const HACKY_IMAGE_CLASS = 'photosw';

const getThumbBoundsFn = index => {
  const thumbnail = document.querySelectorAll(`.${HACKY_IMAGE_CLASS}`)[index];
  const pageYScroll = window.pageYOffset ?? document.documentElement.scrollTop;
  const rect = thumbnail.getBoundingClientRect();
  return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
};

const getImageUrl = (imagePrefix, fileName, transform) => {
  return [IMAGE_PATH, transform, 'gallery', `${imagePrefix}-${fileName}`].join(
    '/'
  );
};

const Gallery = ({ imagePrefix, images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = index => {
    setIsOpen(true);
    setCurrentIndex(index);
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
          src: getImageUrl(imagePrefix, firstImg),
          msrc: getImageUrl(imagePrefix, firstImg, TRANSFORM_PATH),
          w: IMAGE_SHORT_EDGE,
          h: IMAGE_LONG_EDGE,
          vpad: 'r'
        },
        {
          src: getImageUrl(imagePrefix, secondImg),
          msrc: getImageUrl(imagePrefix, secondImg, TRANSFORM_PATH),
          w: IMAGE_SHORT_EDGE,
          h: IMAGE_LONG_EDGE,
          vpad: 'l'
        }
      ];
    } else {
      return [
        ...acc,
        {
          src: getImageUrl(imagePrefix, current),
          msrc: getImageUrl(imagePrefix, current, TRANSFORM_PATH),
          w: IMAGE_LONG_EDGE,
          h: IMAGE_SHORT_EDGE
        }
      ];
    }
  }, []);

  console.log(items);
  return (
    <>
      <div>
        {items.map((image, index) => {
          const { msrc, src, vpad } = image;
          if (vpad) {
            return (
              <div
                key={src}
                className={`w-1/2 p${vpad}-1 inline-block ${HACKY_IMAGE_CLASS}`}
              >
                <LazyImage
                  isVertical={true}
                  src={msrc}
                  onClick={() => handleOpen(index)}
                />
              </div>
            );
          }

          return (
            <div key={src} className={`w-full pb-2 ${HACKY_IMAGE_CLASS}`}>
              <LazyImage src={msrc} onClick={() => handleOpen(index)} />
            </div>
          );
        })}
      </div>
      <PhotoSwipeWrapper
        isOpen={isOpen}
        index={currentIndex}
        items={items}
        onClose={handleClose}
        getThumbBoundsFn={getThumbBoundsFn}
      />
    </>
  );
};

export { Gallery };

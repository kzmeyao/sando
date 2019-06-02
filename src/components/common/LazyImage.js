import React, { memo, useEffect, useRef, useState } from 'react';

const imgPath = 'https://res.cloudinary.com/sando/image/upload/';

const loadImage = (src, setImage, setFadeIn) => {
  const image = new Image();
  image.onload = () => {
    setImage(image);
    setTimeout(() => {
      setFadeIn(true);
    }, 100);
  };
  image.src = src;
};

const LazyImage = ({ isVertical = false, relSrc }) => {
  const [intersected, setIntersected] = useState(false);
  const [node, setNode] = useState(null);
  const [image, setImage] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);
  const observer = useRef(null);
  const imgSrc = `${imgPath}${relSrc}`;

  useEffect(() => {
    if (node) {
      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIntersected(true);
        }
      });
      observer.current.observe(node);
    }
  }, [node]);

  useEffect(() => {
    if (intersected) {
      observer.current.disconnect();
      loadImage(imgSrc, setImage, setFadeIn);
    }
  }, [intersected]);

  const aspectRatio = isVertical ? '2-3' : '3-2';
  const classes = image
    ? 'w-full'
    : `aspect-ratio-${aspectRatio} relative w-full`;

  return (
    <div className={classes} ref={setNode}>
      {image && (
        <img className={`fade-in${fadeIn ? ' start' : ''}`} src={imgSrc} />
      )}
      <noscript>
        <img className="absolute pin-t" src={imgSrc} />
      </noscript>
    </div>
  );
};

export default memo(LazyImage);

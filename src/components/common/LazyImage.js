import React from 'react';
import LazyLoad from 'react-lazyload';

const imgPath = 'https://res.cloudinary.com/sando/image/upload/';

const LazyImage = ({ relSrc }) => (
  <LazyLoad once={true} height={400}>
    <img src={`${imgPath}${relSrc}`} />
  </LazyLoad>
);

export default LazyImage;

import React from 'react';

const Gallery = ({ imagePrefix, images }) => {
  const imageRows = images.split(',');

  return imageRows.map(row => {
    if (row.includes('|')) {
      const ids = row.split('|');
      return (
        <div className="pure-grid">
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
  });
};

export default Gallery;

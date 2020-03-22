import React, { useState } from 'react';

import LazyImage from '../common/LazyImage';
import { Modal } from '../common/Modal';

const Gallery = ({ imagePrefix, images }) => {
  const [showModal, toggleModal] = useState(false);
  const imageRows = images.split(',');

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
                    onClick={() => toggleModal(true)}
                  />
                </div>
                <div className="w-1/2 pl-1">
                  <LazyImage
                    isVertical={true}
                    relSrc={`${imagePrefix}-${secondImg}`}
                    onClick={() => toggleModal(true)}
                  />
                </div>
              </div>
            );
          }

          return (
            <div key={row} className="flex pb-2">
              <LazyImage
                relSrc={`${imagePrefix}-${row}`}
                onClick={() => toggleModal(true)}
              />
            </div>
          );
        })}
      </div>
      {/* {showModal && (
        <Modal classNames="filter-modal" close={() => toggleModal(false)}>
          hi
        </Modal>
      )} */}
    </>
  );
};

export default Gallery;

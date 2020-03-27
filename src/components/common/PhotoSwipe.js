import React, { useEffect, useRef } from 'react';

import '../../../node_modules/photoswipe/dist/photoswipe.css';
import '../../../node_modules/photoswipe/dist/default-skin/default-skin.css';
import PhotoSwipe from '../../../node_modules/photoswipe/dist/photoswipe.js';
import PhotoSwipeUI_Default from '../../../node_modules/photoswipe/dist/photoswipe-ui-default.js';

const getDoubleTapZoom = (isMouseClick, item) => {
  // isMouseClick          - true if mouse, false if double-tap
  // item                  - slide object that is zoomed, usually current
  // item.initialZoomLevel - initial scale ratio of image
  //                         e.g. if viewport is 700px and image is 1400px,
  //                              initialZoomLevel will be 0.5

  if (isMouseClick) {
    // is mouse click on image or zoom icon

    // zoom to original
    return 1;

    // e.g. for 1400px image:
    // 0.5 - zooms to 700px
    // 2   - zooms to 2800px
  } else {
    // is double-tap

    // zoom to original if initial zoom is less than 0.7x,
    // otherwise to 1.5x, to make sure that double-tap gesture always zooms image
    return item.initialZoomLevel < 0.7 ? 1 : 1.5;
  }
};

const PhotoSwipeWrapper = ({
  index,
  items,
  isOpen,
  onClose,
  getThumbBoundsFn
}) => {
  let pswpElement = useRef(null);

  const options = {
    index: index ?? 0,
    closeOnScroll: false,
    history: false,
    getThumbBoundsFn,
    fullscreenEl: false,
    zoomEl: false,
    shareEl: false,
    maxSpreadZoom: 1,
    getDoubleTapZoom
  };

  useEffect(() => {
    const photoSwipe = new PhotoSwipe(
      pswpElement,
      PhotoSwipeUI_Default,
      items,
      options
    );

    if (photoSwipe) {
      if (isOpen) {
        photoSwipe.init();

        photoSwipe.listen('destroy', () => {
          onClose();
        });

        photoSwipe.listen('close', () => {
          onClose();
        });
      }
      if (!isOpen) {
        onClose();
      }
    }
  }, [index, items, isOpen, options]);

  return (
    <div
      className="pswp"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
      ref={node => {
        pswpElement = node;
      }}
    >
      <div className="pswp__bg" />
      <div className="pswp__scroll-wrap">
        <div className="pswp__container">
          <div className="pswp__item" />
          <div className="pswp__item" />
          <div className="pswp__item" />
        </div>
        <div className="pswp__ui pswp__ui--hidden">
          <div className="pswp__top-bar">
            <div className="pswp__counter" />
            <button
              className="pswp__button pswp__button--close"
              title="Close (Esc)"
            />
            <div className="pswp__preloader">
              <div className="pswp__preloader__icn">
                <div className="pswp__preloader__cut">
                  <div className="pswp__preloader__donut" />
                </div>
              </div>
            </div>
          </div>
          <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div className="pswp__share-tooltip" />
          </div>
          <button
            className="pswp__button pswp__button--arrow--left"
            title="Previous (arrow left)"
          />
          <button
            className="pswp__button pswp__button--arrow--right"
            title="Next (arrow right)"
          />
          <div className="pswp__caption">
            <div className="pswp__caption__center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { PhotoSwipeWrapper };

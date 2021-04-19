import classNames from 'classnames';
import React, { useEffect, useReducer, useState } from 'react';
import { IMAGE_PATH } from '../../constants';
import { PhotoSwipeWrapper } from '../common/PhotoSwipe';

const TRANSFORM_PATH = 't_scale_80';
const IMAGE_LONG_EDGE = 1080 * 0.8;
const IMAGE_SHORT_EDGE = 721 * 0.8;
const PHOTOSWIPE_CLASS = 'photosw';

const getImageUrl = (imagePrefix, fileName, transform) => {
  return [IMAGE_PATH, transform, 'gallery', `${imagePrefix}-${fileName}`]
    .filter(Boolean)
    .join('/');
};

const getThumbBoundsFn = (index) => {
  const thumbnail = document.querySelectorAll(`.${PHOTOSWIPE_CLASS}`)[index];
  const pageYScroll = window.pageYOffset ?? document.documentElement.scrollTop;
  const rect = thumbnail.getBoundingClientRect();
  return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
};

const constructFigure = ({ file, alt, caption }, imagePrefix) => {
  const files = file.split('|');
  const alts = alt.split('|');
  const isVertical = files.length > 1;

  const imageClass = classNames('lazy relative w-full bg-grey-light', {
    'aspect-ratio-2-3': isVertical,
    'aspect-ratio-3-2': !isVertical,
  });

  const images = files.map((file, i) => {
    const containerClass = classNames(PHOTOSWIPE_CLASS, {
      'pr-2': isVertical && i % 2 === 0,
      'pl-2': isVertical && i % 2 === 1,
      'inline-block w-1/2': isVertical,
      'w-full pb-2': !isVertical,
    });

    return `<div class="${containerClass}">
      <div 
        class="${imageClass}"
        data-src="${getImageUrl(imagePrefix, file, TRANSFORM_PATH)}" 
        data-alt="${alts[i]}" 
      ></div>
    </div>`;
  });

  return `
    <figure class="mb-2">
      ${images.map((i) => i.trim()).join('')}
      ${
        caption
          ? `<figcaption class="m-auto text-center text-base mb-6">${caption}</figcaption>`
          : ''
      }
    </figure>
  `;
};

const PostText = ({ post }) => {
  const [state, setState] = useState({
    isOpen: false,
    currentIndex: 0,
  });

  const { frontmatter, html } = post;
  const { images2, imagePrefix } = frontmatter;

  const handleOpen = (index) => {
    setState({
      isOpen: true,
      currentIndex: index,
    });
  };

  const handleClose = () => {
    setState({
      isOpen: false,
      currentIndex: 0,
    });
  };

  useEffect(() => {
    const io = new IntersectionObserver((entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const container = entry.target;
          const image = new Image();
          container.className = 'w-full bg-grey-light';
          image.src = container.dataset.src;
          image.alt = container.dataset.alt;
          image.className = 'fade-in cursor-pointer';
          container.prepend(image);

          setTimeout(() => {
            image.classList.add('start');
          }, 100);

          io.unobserve(container);
        }
      })
    );

    document.querySelectorAll('.lazy').forEach((element, i) => {
      io.observe(element);
      element.addEventListener('click', () => {
        handleOpen(i);
      });
    });
  }, []);

  const items = (images2 ?? []).reduce((acc, current) => {
    const { file } = current;
    const files = file.split('|');
    const isVertical = files.length > 1;
    return [
      ...acc,
      ...files.map((file) => ({
        src: getImageUrl(imagePrefix, file),
        msrc: getImageUrl(imagePrefix, file, TRANSFORM_PATH),
        w: isVertical ? IMAGE_SHORT_EDGE : IMAGE_LONG_EDGE,
        h: isVertical ? IMAGE_LONG_EDGE : IMAGE_SHORT_EDGE,
      })),
    ];
  }, []);

  const final = html.replace(
    /<figure data-index=\'([\d]+)\'>/g,
    (_match, index) => constructFigure(images2[index], imagePrefix)
  );

  return (
    <>
      <div
        className="post-text text-lg"
        dangerouslySetInnerHTML={{ __html: final }}
      />
      <PhotoSwipeWrapper
        isOpen={state.isOpen}
        index={state.currentIndex}
        items={items}
        onClose={handleClose}
        getThumbBoundsFn={getThumbBoundsFn}
      />
    </>
  );
};

export default PostText;

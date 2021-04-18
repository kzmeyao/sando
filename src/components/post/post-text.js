import classNames from 'classnames';
import React, { useEffect } from 'react';
import { IMAGE_PATH } from '../../constants';

const getImageUrl = (imagePrefix, fileName, transform) => {
  return [IMAGE_PATH, transform, 'gallery', `${imagePrefix}-${fileName}`]
    .filter(Boolean)
    .join('/');
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
    const containerClass = classNames({
      'pr-2': isVertical && i % 2 === 0,
      'pl-2': isVertical && i % 2 === 1,
      'inline-block w-1/2': isVertical,
      'w-full pb-2': !isVertical,
    });

    return `<div class="${containerClass}">
      <div 
        class="${imageClass}" 
        data-src="${getImageUrl(imagePrefix, file, 't_scale_80')}" 
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
  const { frontmatter, html } = post;
  const { images2, imagePrefix } = frontmatter;

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

    document
      .querySelectorAll('.lazy')
      .forEach((element) => io.observe(element));
  });

  const final = html.replace(
    /<figure data-src=\'([\d]+)\'>/g,
    (_match, capture) => constructFigure(images2[capture], imagePrefix)
  );

  return (
    <div
      className="post-text text-lg"
      dangerouslySetInnerHTML={{ __html: final }}
    />
  );
};

export default PostText;

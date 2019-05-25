import React from 'react';

const headingClass = 'font-heading text-xl text-grey-darkest my-6';
const pClass = 'text-sm leading-loose text-grey-darkest';

const About = () => (
  <>
    <h2 className={headingClass}>About the website:</h2>
    <p className={pClass}>
      On my first trip to Japan, I ended up joining the cult of the humble egg
      salad sando after just one bite. For the uninitiated, `sando` is short for
      sandwich, and the egg salad sando is the perfect sandwich. Its simplicity,
      taste, and value just can't be beat. It's probably not even a stretch to
      that this bite cemented my love for travel. So here I am, writing this
      travel journal / travel guide, and I can't think of a better name for it
      than to name it after the thing that started it all.
    </p>
    <br />
    <h2 className={headingClass}>About the author:</h2>
    <p className={pClass}>
      Hi there! My name is Kevin Yao. I'm a software engineer by trade, but I'm
      also a serial creator. My curiosity often leads me down rabbitholes and I
      spend an inordinate amount of time immersing myself in the subject and
      creating something out of it. For example, I've composed songs while
      teaching myself how to play guitar, programmed the first scene of a RPG
      while learning how to animate pixel art, and 3d-modeled a house while
      dreaming of eventually designing my own house. In addition to these mostly
      private endeavors, I enjoy travel + photography. Hence, I created `sando`
      and I sincerely hope you enjoy your visit.
    </p>
  </>
);

export default About;

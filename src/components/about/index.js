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
      say that my love for travel came after having that said bite. So here I
      am, writing this travel journal / travel guide, and I can't think of a
      better name for it than to name it after the thing that started it all.
    </p>
    <br />
    <h2 className={headingClass}>About the author:</h2>
    <p className={pClass}>
      Hi, my name is Kevin Yao. I'm a software engineer by trade, but I'm also a
      serial dabbler. My curiosity often leads me down creative rabbitholes and
      I spend an inordinate amount of time immersing myself in the subject and 
      creating something out of it. For example, I've composed songs while teaching 
      myself how to play guitar, put together the first scene of a JRPG while 
      learning how to draw pixel art, 3d-modeled a house while dreaming of eventually 
      designing my own house, etc. Come to think of it, even building this website 
      happened on a whim. Unlike my other projects though, this one is completely 
      public, so I sincerely hope you enjoy the content.
    </p>
  </>
);

export default About;

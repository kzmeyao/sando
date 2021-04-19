import React from 'react';

const headingClass =
  'font-heading font-semibold text-xl text-grey-darkest my-4';
const pClass = 'leading-loose text-grey-darkest';

const About = () => (
  <>
    <h2 className={headingClass}>About the website:</h2>
    <p className={pClass}>
      On my first trip to Japan, I ended up joining the cult of the humble egg
      salad sando after just one bite. For the uninitiated, `sando` is short for
      sandwich, and the egg salad sando is the perfect sandwich. Its simplicity,
      taste, and value just can't be beat. It's probably not even a stretch to
      say that this bite cemented my love for travel. So here I am, creating
      this travel journal, and I can't think of a better name for it than to
      name it after the thing that started it all.
    </p>
    <br />
    <h2 className={headingClass}>About the author:</h2>
    <p className={pClass}>
      Hi there! My name is Kevin Yao. I'm a software developer by trade, but I'm
      also a serial creator. My curiosity often leads me down rabbitholes and I
      end up spending a lot of time immersing myself in the subject and creating
      something out of it. Although these creative projects tend to change
      frequently, one constant creative outlet for me has been photography.
      Hence, I created `sando` to document and showcase these journeys. I
      sincerely hope you enjoy your visit.
    </p>
  </>
);

export default About;

import React from 'react';

const headingClass =
  'font-heading font-semibold text-xl text-grey-darkest my-4';
const pClass = 'leading-loose text-grey-darkest mb-6';

const About = () => (
  <>
    <h2 className={headingClass}>About the website:</h2>
    <p className={pClass}>
      On my first trip to Japan, I ended up joining the cult of the humble egg
      salad <em>sando</em> after just one bite. For the uninitiated,{' '}
      <em>sando</em> is short for sandwich, and the egg salad sando is the
      perfect sandwich. Its simplicity, taste, and value just can't be beat.
      It's not even a stretch to say that this bite cemented my love for travel.
      So here I am, creating this travel journal, and I can't think of a better
      name for it than to name it after the thing that started it all.
    </p>
    <h2 className={headingClass}>About the author:</h2>
    <p className={pClass}>
      Hi, my name is Kevin Yao. I'm a software developer by trade, but I'm also
      a serial creator. My curiosity often takes me down rabbit holes and that
      has led me to accumulate an eclectic range of interests over time.
      Although the projects I dabble in tend to change frequently, one constant
      creative outlet for me has been photography. I pursue a documentary-like
      style of photography, hoping to capture scenes that will bring me back to
      how I remember them. I hope you get something out of them as well. Thanks
      for visiting!
    </p>
    <h2 className={headingClass}>Want more?</h2>
    <p className={pClass}>
      Some of my photos don't fit in this journal format. For those, you can
      check out my{' '}
      <a className="underline" href="https://www.instagram.com/kzmeyao/">
        instagram
      </a>
      .
    </p>
  </>
);

export default About;

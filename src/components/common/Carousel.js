import ReactCarousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Carousel = ({ images }) => {
  return (
    <ReactCarousel>
      {images.map(image => (
        <img src={image} />
      ))}
    </ReactCarousel>
  );
};

export { Carousel };

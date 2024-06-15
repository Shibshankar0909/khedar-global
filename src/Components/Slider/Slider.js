import React from "react";
import './Slider.css';
import slider1 from './slider4.png';
import slider2 from './slider1.avif';
import slider3 from './slider2.avif';
import slider4 from './slider3.avif';

const images = [
  {
    url: slider1,
    // caption: 'Dedicated Workers',
  },
  {
    url: slider2,
    caption: 'Dedicated Workers',
  },
  {
    url: slider3,
    caption: 'Efficient Infrastructure',
  },
  {
    url: slider4,
    caption: 'State of the art manufacture unit',
  },

];
const delay = 7000;

function Slider() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((slideImage, idx) => (
          <div
            className="slide"
            key={idx}
            style={{ backgroundImage: `linear-gradient(
              rgba(0, 0, 0, 0.5), 
              rgba(0, 0, 0, 0.5)
            ), url(${slideImage.url})` }}
          >
            <h1 className={`${idx === index ? 'text-animation' : 'off'}`} >
                {slideImage.caption}
              </h1>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
      
    </div>
  );
}
export default Slider;
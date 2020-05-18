import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './index.scss';
import down from '../../assets/icons/down-arrow.svg'

import MediaAssets from '../../assets/media';

export default function Media() {
  return (
  <div className="media container">
    <div className="sub-container">
      <h1>Media</h1>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={MediaAssets.length}
      >
        <div className="slider-container">
          <Slider>
            {
              MediaAssets.map((src, index) => {
                return (
                  <Slide key={index} index={index} className="media-img-slide">
                    <img className="media-img" src={src} alt={`antonio llaca ${index}`}/>
                  </Slide>
                )
              })
            }
          </Slider>
          
          <ButtonBack className="buttonBack"><img src={down} alt="back arrow"/></ButtonBack>
          <ButtonNext className="buttonNext"><img src={down} alt="next arrow"/></ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  </div>)
}
import React from 'react'
import './Slider.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {sliderImgs} from '../../utils/images'
// import one from '../../assets/images/slider_img_2.jpg'
// import two from '../../assets/images/slider_img_1.jpg'

export const HeaderSlider = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed:3000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='container my-4 '>

    <Slider {...settings}>
      <div className='slider-item'>
        <img src={sliderImgs[1]} alt="slider_img" />
      </div>
      <div className='slider-item'>
        <img src={sliderImgs[0]} alt="slider_img" />
      </div>
    </Slider>
  </div>
  )
}

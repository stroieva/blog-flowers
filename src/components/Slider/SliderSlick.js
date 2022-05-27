import React from 'react'
import Slider from 'react-slick'
import 'common/Grid/Grid.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import slider1 from 'common/images/slider-1.png'
import slider2 from 'common/images/slider-2.jpg'
import slider3 from 'common/images/slider-3.jpg'
import slider4 from 'common/images/slider-4.jpg'
import 'components/Slider/SliderSlick.css'

export const SliderSlick = () => {
    const settings = {
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 2500,
        draggable: false,
        fade: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        navigation: true,
    }
    return (
        <div className="slider">
            <Slider {...settings}>
                <div className="slider-image">
                    <img src={slider1} />
                </div>

                <div className="slider-image">
                    <img src={slider2} />
                </div>

                <div className="slider-image">
                    <img src={slider3} />
                </div>

                <div className="slider-image">
                    <img src={slider4} />
                </div>
            </Slider>
        </div>
    )
}

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import './Slider.css';
import One from '../../images/one.jpg';
import Two from '../../images/two.jpg';
import Three from '../../images/three.jpg';
import Four from '../../images/four.jpg';
import Five from '../../images/five.jpg';
import Six from '../../images/six.jpg';


function Slider() {
    return (
        <div className="slider">
        <OwlCarousel
        className="owl-theme"
        items="3"
        autoplay
        nav
        dots
        loop
        >
            <div className="item">
                <img src={One} alt="" />
            </div>
            <div className="item">
                <img src={Two} alt="" />
            </div>
            <div className="item">
                <img src={Three} alt="" />
            </div>
            <div className="item">
                <img src={Four} alt="" />
            </div>
            <div className="item">
                <img src={Five} alt="" />
            </div>
            <div className="item">
                <img src={Six} alt="" />
            </div>
        </OwlCarousel>
        </div>
    )
}

export default Slider

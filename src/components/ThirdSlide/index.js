import React, { Component } from "react";
import Slider from "react-slick";
import './thirdSlide.css'
import plus from './plus.png'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="wow animate__animated animate__fadeInLeft">
        <Slider {...settings}>
          <div className="thirdSlide-left">
            <div className="thirdSlide-square"></div>
            <img className="thirdSlide-plus" src={plus}/>
            <div className="thirdSlide-cont">
              <h1 className="thirdSlide-h1">Поступление новых <br/> самокатов</h1>
              <p className="thirdSlide-p">Электротранспорт снова в моде!</p>
            </div>
          </div>
          <div className="thirdSlide-right">
            <div className="thirdSlide-square"></div>
            <img className="thirdSlide-plus" src={plus}/>
            <div className="thirdSlide-cont">
              <h1 className="thirdSlide-h1">Музыка всегда с тобой,<br/> где бы ты не был</h1>
              <p className="thirdSlide-p">Смотри свежую коллекцию JBL</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
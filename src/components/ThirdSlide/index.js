import React, { Component } from "react";
import Slider from "react-slick";
import style from './thirdSlide.module.css'
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
      <div>
        <Slider {...settings}>
          <div className={style.left}>
            <div className={style.square}></div>
            <img className={style.plus} src={plus}/>
            <div className={style.cont}>
              <h1 className={style.h1}>Поступление новых <br/> самокатов</h1>
              <p className={style.p}>Электротранспорт снова в моде!</p>
            </div>
          </div>
          <div className={style.right}>
            <div className={style.square}></div>
            <img className={style.plus} src={plus}/>
            <div className={style.cont}>
              <h1 className={style.h1}>Музыка всегда с тобой,<br/> где бы ты не был</h1>
              <p className={style.p}>Смотри свежую коллекцию JBL</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
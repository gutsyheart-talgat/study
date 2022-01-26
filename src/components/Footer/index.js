import React from "react";
import './footer.css'
import mouse from './mouse.svg'
import arrow from './arrow.svg'
import tochki from './tochki.svg'


export default function Footer(){
    
    return(
        <div className="footer">
            <div className="footer-mar">
                <div className="container">
                    <div className="footer-main wow animate__backInUp animate__animated">
                        <div className="footer-logo">
                            <img src={mouse} className="footer-mouse"/>
                            <div className="footer-name">
                                <h1>Гаджетариум</h1>
                                <p>Магазин цифровых решений</p>
                            </div>
                        </div>
                        <div className="footer-menu">
                            <p>Телефоны</p>
                            <p>Планшеты</p>
                            <p>Дроны</p>
                            <p>Игрушки</p>
                            <img src={tochki}/>
                        </div>
                        <img src={arrow} className="footer-arrow"/>
                        <img src={arrow} className="footer-arrow1"/>
                        <h1 className="footer-h1">+38 (044) 784-23-85</h1>
                        <button className="footer-btn">Заказать звонок</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
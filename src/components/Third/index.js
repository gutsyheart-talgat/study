import React from "react";
import './third.css'
import plus from './plus.png'

export default function Third(){
    return (
        <div className="third">
            <div className="third-left wow animate__animated animate__fadeInLeft">
                <div className="third-square"></div>
                <img className="third-plus" src={plus}/>
                <div className="third-cont">
                    <h1 className="third-h1">Поступление новых <br/> самокатов</h1>
                    <p className="third-p">Электротранспорт снова в моде!</p>
                </div>
            </div>
            <div className="third-right wow animate__animated animate__fadeInRight">
                <div className="third-square"></div>
                <img className="third-plus" src={plus}/>
                <div className="third-cont">
                    <h1 className="third-h1">Музыка всегда с тобой,<br/> где бы ты не был</h1>
                    <p className="third-p">Смотри свежую коллекцию JBL</p>
                 </div>
            </div>
        </div>
    )
}
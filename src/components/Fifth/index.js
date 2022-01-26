import React from "react";
import './fifth.css'


export default function Fifth(){
    return(
        <div className="fifth wow animate__animated animate__fadeInLeft ">
            <h1 className="fifth-h1">О “Гаджетариуме” в цифрах</h1>
            <div className="fifth-info">
                <div className="fifth-triger">
                    <h1 className="fifth-chislo">58</h1>
                    <p className="fifth-name">Филиалов по всей стране</p>
                </div>
                <div className="fifth-triger">
                    <h1 className="fifth-chislo">379</h1>
                    <p className="fifth-name">Товаров в каталоге</p>
                </div>
                <div className="fifth-triger">
                    <h1 className="fifth-chislo">4688</h1>
                    <p className="fifth-name">Покупателей</p>
                </div>
                <div className="fifth-triger">
                    <h1 className="fifth-chislo">12</h1>
                    <p className="fifth-name">Часов доставка по городам</p>
                </div>
                
            </div>
        </div>
    )
}
import React from "react";
import style from './fifth.module.css'

export default function Fifth(){
    return(
        <div className={style.fifth}>
            <h1 className={style.h1}>О “Гаджетариуме” в цифрах</h1>
            <div className={style.info}>
                <div className={style.triger}>
                    <h1 className={style.chislo}>58</h1>
                    <p className={style.name}>Филиалов по всей стране</p>
                </div>
                <div className={style.triger}>
                    <h1 className={style.chislo}>379</h1>
                    <p className={style.name}>Товаров в каталоге</p>
                </div>
                <div className={style.triger}>
                    <h1 className={style.chislo}>4688</h1>
                    <p className={style.name}>Покупателей</p>
                </div>
                <div className={style.triger}>
                    <h1 className={style.chislo}>12</h1>
                    <p className={style.name}>Часов доставка по городам</p>
                </div>
                
            </div>
        </div>
    )
}
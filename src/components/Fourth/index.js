import React from "react";
import style from './fourth.module.css'
import Tovary from './Tovary'

export default function Fourth (){
    return (
        <div className={style.fourth}>
            <h1 className={style.h1}>Каталог товаров</h1>
            <div className={style.thing}>
                <Tovary/>
            </div>
            <Tovary/>
        </div>
    )
}
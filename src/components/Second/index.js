import React from "react";
import style from './second.module.css'
import Tovary from './Tovary'
export default function Second(){
    
    return (
        <div className={style.second}>
            <header>
                <h1 className={style.headH1}>Горячие поступления</h1>
                <p className={style.headP}>Все</p>
                <p className={style.headP}>Телефоны</p>
                <p className={style.headP}>Планшеты</p>
                <p className={style.headP}>Дроны</p>
                <p className={style.headP}>Игрушки</p>
            </header>
            <Tovary/>
        </div>
    )
}
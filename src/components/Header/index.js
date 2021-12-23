import React  from "react";
import menu from "./tochki.svg"
import style from './header.module.css'
import mouse from './mouse.svg'
import market from './supermarket.svg'
import arrow from './arrow.svg'

export default function Header(){
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <img src={mouse}/>
                <div className={style.name}>
                    <h1>Гаджетариум</h1>
                    <p>Магазин цифровых решений</p>
                </div>
            </div>
            <div className={style.menu}>
                <p>Телефоны</p>
                <p>Планшеты</p>
                <p>Дроны</p>
                <p>Игрушки</p>
                <img src={menu}/>
            </div>
            <h1>+38 (044) 784-23-85</h1>
            <button className={style.btn}>Заказать звонок</button>
            <div className={style.buy}>
                <button className={style.marketBtn}><img src={market}/></button>
                <p>4 896 грн.</p>
                <img src={arrow}/>
            </div>
        </div>
    )
}
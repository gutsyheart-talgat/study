import React  from "react";
import menu from "./tochki.svg"
import style from './header.module.css'
import mouse from './mouse.svg'
import market from './supermarket.svg'
import arrow from './arrow.svg'
import Menu from './Menu'
import burger from './gamburger.svg'

export default function Header(active,setActive){
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <img className={style.mouse} src={mouse}/>
                <div className={style.name}>
                    <h1 className={style.nameH1}>Гаджетариум</h1>
                    <p className={style.nameP}>Магазин цифровых решений</p>
                </div>
            </div>
            <div className={style.menu}>
                <p className={style.menuP}>Телефоны</p>
                <p className={style.menuP}>Планшеты</p>
                <p className={style.menuP}>Дроны</p>
                <p className={style.menuP}>Игрушки</p>
                <img src={menu}/>
            </div>
            <h1 className={style.h1}>+38 (044) 784-23-85</h1>
            <button className={style.btn}>Заказать звонок</button>
            <div className={style.buy}>
                <button className={style.marketBtn}><img src={market}/></button>
                <p className={style.price}>4 896 грн.</p>
                <img src={arrow}/>
            </div>
            <div className={style.burger}>
                <button className={style.burgerBtn} onClick={()=>setActive(!active)}><img src={burger}/></button>
                
            </div>
            
        </div>
    )
}
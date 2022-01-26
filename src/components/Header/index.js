import React  from "react";
import menu from "./tochki.svg"
import  './header.css'
import mouse from './mouse.svg'
import market from './supermarket.svg'
import arrow from './arrow.svg'
import Menu from './Menu'
import burger from './gamburger.svg'

export default function Header(active,setActive){
    return (
        <div className="header wow animate__animated animate__backInDown">
            <div className="header-logo">
                <img className="header-mouse" src={mouse}/>
                <div className="header-name">
                    <h1 className="header-nameH1">Гаджетариум</h1>
                    <p className="header-nameP">Магазин цифровых решений</p>
                </div>
            </div>
            <div className="header-menu">
                <p className="header-menuP">Телефоны</p>
                <p className="header-menuP">Планшеты</p>
                <p className="header-menuP">Дроны</p>
                <p className="header-menuP">Игрушки</p>
                <img src={menu}/>
            </div>
            <h1 className="header-h1">+38 (044) 784-23-85</h1>
            <button className="header-btn">Заказать звонок</button>
            <div className="header-buy">
                <button className="header-marketBtn"><img src={market}/></button>
                <p className="header-price">4 896 грн.</p>
                <img src={arrow}/>
            </div>
            <div className="header-burger">
                <button className="header-burgerBtn" onClick={()=>setActive(!active)}><img src={burger}/></button>
            </div>
            
        </div>
    )
}
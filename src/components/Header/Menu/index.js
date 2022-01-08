import React from "react";
import style from './menu.module.css'
import menu from "../tochki.svg"


export default function Menu(){
    return(
        <div className={style.Menu}>
            <div className={style.blur}/>
            <div className={style.menu_content}>
                <ul>
                    <p>Телефоны</p>
                    <p>Планшеты</p>
                    <p>Дроны</p>
                    <p>Игрушки</p>
                    <p><img src={menu}/></p>
                </ul>
            </div>
             
        </div>
    )
}
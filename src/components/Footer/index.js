import React from "react";
import style from './footer.module.css'
import mouse from './mouse.svg'
import arrow from './arrow.svg'
import tochki from './tochki.svg'

export default function Footer(){
    return(
        <div className={style.footer}>
            <div className={style.mar}>
                <div className="container">
                    <div className={style.main}>
                        <div className={style.logo}>
                            <img src={mouse} className={style.mouse}/>
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
                            <img src={tochki}/>
                        </div>
                        <img src={arrow} className={style.arrow}/>
                        <img src={arrow} className={style.arrow1}/>
                        <h1 className={style.h1}>+38 (044) 784-23-85</h1>
                        <button className={style.btn}>Заказать звонок</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
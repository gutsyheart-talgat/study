import React from "react";
import style from './third.module.css'
import plus from './plus.png'

export default function Third(){
    return (
        <div className={style.third}>
            <div className={style.left}>
                <div className={style.square}></div>
                <img className={style.plus} src={plus}/>
                <div className={style.cont}>
                    <h1 className={style.h1}>Поступление новых <br/> самокатов</h1>
                    <p className={style.p}>Электротранспорт снова в моде!</p>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.square}></div>
                <img className={style.plus} src={plus}/>
                <div className={style.cont}>
                    <h1 className={style.h1}>Музыка всегда с тобой,<br/> где бы ты не был</h1>
                    <p className={style.p}>Смотри свежую коллекцию JBL</p>
                 </div>
            </div>
        </div>
    )
}
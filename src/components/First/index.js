import React from 'react'
import style from './first.module.css'
import copter from './copter.svg'

export default function First(){
    return(
        <div className={style.first}>
            <div className={style.info}>
                <h1 className={style.h1}>
                    Яркие гаджеты <br/>
                    на любой вкус и день
                </h1>
                <p className={style.p}>
                    Мы собрали лучшие гаджеты от лучших<br/> 
                    брендов, чтобы порадовать вас свежими<br/> 
                    новинками digital-рынка! 
                </p>
                <button className={style.btn}>Смотреть каталог</button>
            </div>
            <div className={style.jurnal}>
                <img className={style.copter} src={copter}/>
            </div>
        </div>
    )
}
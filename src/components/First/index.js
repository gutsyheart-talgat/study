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
                    Мы собрали лучшие гаджеты от лучших
                    брендов, чтобы порадовать вас свежими
                    новинками digital-рынка! 
                </p>
                <br/>
                <button className={style.btn}>Смотреть каталог</button>
            </div>
            
            <div className={style.jurnal}>
                <img className={style.copter} src={copter}/>
                <div className={style.white}></div>
                <div className={style.thing}>
                    <h1 className={style.name}>DJI Mavic Pro</h1>
                    <p className={style.desc}>32 MP Sphere Panoramas  Foldable & Portable 3-Axis  Gimbal & 4K Camera <br/></p>
                    <br/>
                    <h1 className={style.price}>3 890 грн.</h1>
                </div>
            </div>
            <div className={style.jurBack}></div>
        </div>
    )
}
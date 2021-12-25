import React from "react";
import style from './fourth.module.css'
import iphone from './iphone.svg'
import dron from './dron.svg'
import ipad from './ipad.svg'
import watch from './watch.svg'
import arrow from './arrow.svg'


export default function Tovary(){
    return(
        <div className={style.tovary}>
                <div className={style.tovar}>
                    <h1 className={style.tovarName}>iPhone 10</h1>
                    <img src={iphone}/>
                    <div className={style.Information}>
                        <div className={style.tovarInfo}>
                            <p className={style.Info}>Корпус:</p>
                            <p className={style.tovInfo}>Металл,стекло</p>
                        </div>
                        <div className={style.tovarInfo}>
                            <p className={style.Info}>Влагозащита:</p>
                            <p className={style.tovInfo}>IP67</p>
                        </div>
                        <div className={style.tovarInfo}>
                            <p className={style.Info}>Цвет:</p>
                            <p className={style.tovInfo}>Черный</p>
                        </div>
                        <div className={style.tovarInfo}>
                            <p className={style.Info}>Тип экрана:</p>
                            <p className={style.tovInfo}>IPS</p>
                        </div>
                        <div className={style.tovarInfo}>
                            <p className={style.Info}>Размер экрана:</p>
                            <p className={style.tovInfo}>4.7</p>
                        </div>
                    </div>
                    <div className={style.cena}>
                        <h1 className={style.newCena}>22 000 грн.</h1>
                        <p className={style.oldCena}>22 000 грн.</p>
                        <img className={style.arrow} src={arrow}/>
                    </div>
                </div>
                <div className={style.tovar}>
                    <h1 className={style.tovarName}>DJI Mavic Pro</h1>
                    <img src={dron}/>
                    <div className={style.Information}>
                        <div className={style.tovarInfo}>
                            <p className={style.Info}>Корпус:</p>
                            <p className={style.tovInfo}>Пластик</p>
                        </div>
                        <div className={style.tovarInfo}>
                            <p className={style.Info}>Влагозащита:</p>
                            <p className={style.tovInfo}>IP68</p>
                        </div>
                        <div className={style.tovarInfo}>
                            <p className={style.Info}>Цвет:</p>
                            <p className={style.tovInfo}>Черный/Белый</p>
                        </div>
                        <div className={style.tovarInfo}>
                            <p className={style.Info}>Батарея:</p>
                            <p className={style.tovInfo}>Литий-ионная</p>
                        </div>
                        
                    </div>
                    <div className={style.cena}>
                        <h1 className={style.newCena}>3 963 грн.</h1>
                        <p className={style.oldCena}>22 000 грн.</p>
                        <img className={style.arrow} src={arrow}/>
                    </div>
                </div>
                <div className={style.tovar}>
                    <h1 className={style.tovarName}>Apple iPad Pro</h1>
                    <img src={ipad}/>
                    <div className={style.Information}>
                        <div className={style.tovarInfo}>
                            <p className={style.Info}>Корпус:</p>
                            <p className={style.tovInfo}>Пластик</p>
                        </div>
                        <div className={style.tovarInfo}>
                            <p className={style.Info}>Влагозащита:</p>
                            <p className={style.tovInfo}>IP68</p>
                        </div>
                        <div className={style.tovarInfo}>
                            <p className={style.Info}>Цвет:</p>
                            <p className={style.tovInfo}>Черный/Белый</p>
                        </div>
                        
                        <div className={style.tovarInfo}>
                            <p className={style.Info}>Батарея:</p>
                            <p className={style.tovInfo}>Литий-ионная</p>
                        </div>
                    </div>
                    <div className={style.cena}>
                        <h1 className={style.newCena}>18 567 грн.</h1>
                        <p className={style.oldCena}>22 000 грн.</p>
                        <img className={style.arrow} src={arrow}/>
                    </div>
                </div>
                <div className={style.tovar1}>
                    <h1 className={style.tovarName}>Apple watch series 5</h1>
                    <img src={watch}/>
                    <div className={style.Information}>
                        <div className={style.tovarInfo}>
                            <p className={style.Info}>Корпус:</p>
                            <p className={style.tovInfo}>Пластик</p>
                        </div>
                        <div className={style.tovarInfo}>
                            <p className={style.Info}>Влагозащита:</p>
                            <p className={style.tovInfo}>IP68</p>
                        </div>
                        <div className={style.tovarInfo}>
                            <p className={style.Info}>Цвет:</p>
                            <p className={style.tovInfo}>Черный/Белый</p>
                        </div>
                        <div className={style.tovarInfo}>
                            <p className={style.Info}>Батарея:</p>
                            <p className={style.tovInfo}>Литий-ионная</p>
                        </div>
                        
                    </div>
                    <div className={style.cena}>
                        <h1 className={style.newCena}>12 500 грн.</h1>
                        <p className={style.oldCena}>22 000 грн.</p>
                        <img className={style.arrow} src={arrow}/>
                    </div>
                </div>
                
            </div>
    )
}
import React from "react";
import style from './fourth.module.css'
import iphone from './iphone.png'
import dron from './dron.png'
import ipad from './ipad.png'
import watch from './watch.png'
import arrow from './arrow.svg'


export default function Tovary(){
    return(
        <div className={style.tovary}>
                <div className={style.tovar}>
                    <h1 className={style.tovarName}>iPhone 10</h1>
                    <div className={style.img}><img src={iphone}/></div>
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
                        <h1 className={style.newCena}>22 000грн.</h1>
                        <p className={style.oldCena}>22 000грн.</p>
                        <img className={style.arrow} src={arrow}/>
                    </div>
                </div>
                <div className={style.tovar}>
                    <h1 className={style.tovarName}>DJI Mavic Pro</h1>
                    <div className={style.img}><img src={dron}/></div>
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
                    <div className={style.img}><img src={ipad}/></div>
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
                    <div className={style.img}><img src={watch}/></div>
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
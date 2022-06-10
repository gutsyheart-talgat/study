import React from 'react'
import './first.css'
import copter from './copter.svg'
import Frame from './Frame.png'

export default function First(){
    return(
        <div className="first">
            <div className="first-info wow animate__animated animate__fadeInLeft">
                <h1 className="first-h1">
                    Яркие гаджеты <br/>
                    на любой вкус и день
                </h1>
                <p className="first-p">
                    Мы собрали лучшие гаджеты от лучших
                    брендов, чтобы порадовать вас свежими
                    новинками digital-рынка! 
                </p>
                <br/>
                <button className="first-btn">Смотреть каталог</button>
            </div>
            
            <div className="first-jurnal">
                <img className="first-copter" src={copter}/>
                <div className="first-white"></div>
                <div className="first-thing">
                    <h1 className="first-name">DJI Mavic Pro</h1>
                    <p className="first-desc">32 MP Sphere Panoramas  Foldable & Portable 3-Axis  Gimbal & 4K Camera <br/></p>
                    <br/>
                    <h1 className="first-price">3 890 грн.</h1>
                </div>
                <img src={Frame} className="first-frame"/>
            </div>
            <div className="first-jurBack"></div>
        </div>
    )
}

import React from "react";
import './Hooter.css';
import { Parallax } from 'react-parallax';
import Back from '../img/black.png';
import vk from '../img/vk.svg';
import vkh from '../img/vk-hover.svg';
import tg from '../img/telega.svg';
import wat from '../img/wat.svg';

const Hooter = () => {
    return (
        <Parallax bgImage={Back} strength={500}>
            <div className="hooter_end">
                <div className="hooter_endf">
                </div>
                <h2 className="hooter_info">Свяжитесь с нами :З</h2>
                <h2 className="hooter_info_links">Способы связи с нами</h2>
                <div className="links_hooter">
                    <a href="">terjf@hmail.com</a>
                    <a href="">89886540934</a>
                    <a href="">Zatsarin V.</a>
                    <a href="">Главная</a>
                    <a href="">Лицензионное соглашение</a>
                </div>
                <div className="hooter_ends_items">
                    <div className="_items">
                        <img src={vkh} alt="vk" />
                    </div>
                    <div className="hooter_ends_items_tg">
                        <img src={tg} alt="" />
                    </div>
                    <div className="__items">
                        <img src={wat} alt="" />    
                    </div>
                </div>
            </div>
        </Parallax>
    )
}

export default Hooter;
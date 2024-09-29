import React, { useEffect, useState } from "react";
import './Header.css';
import Back from '../img/black.png'
import { Parallax } from 'react-parallax';

const Header = () => {
    return (
            <Parallax blur={{ min: -15, max: 15 }} bgImage={Back}  strength={100}>
                <div className="novbar">
                    <div className="novbar_cont">
                        Janull
                    </div>
                    <div className="text_novbar">
                        <a href="">Главная</a>
                        <a href="">Заметки</a>
                        <a href="">Другая страница</a>
                    </div>
                </div>
            </Parallax>
    )
}

export default Header;
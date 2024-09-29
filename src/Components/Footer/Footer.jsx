import React from 'react';
import './Footer.css';
import { Parallax, ParallaxLayer } from 'react-parallax';
import Image from '../img/black.png';


const Footer = () => {
    return (
        <Parallax bgImage={Image} strength={500}>
            <div className="footer_cont">
                <div className="footer_ds">
                    <h3 className="text_qq">Счетчик:</h3>
                    <div className="footer_ds_l">
                        <p>34</p>
                    </div>
                    <div className="buttons">
                        <p className="b_e">Клик</p>
                        <p className="b_e">Рестарт</p>
                    </div>
                </div>
            </div>
        </Parallax>
    )
}

export default Footer;
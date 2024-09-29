import React from 'react';
import './Content.css';
import { Parallax } from 'react-parallax';
import Back_c from '../img/backw.jpg';

const Content = () => {
    return (
        <Parallax bgImage={Back_c} strength={500}>
            <div className="content">
                <div className="cont_text">
                    Величие природы и загадки высоких вершин
                </div>
            </div>
        </Parallax>
    )
}

export default Content;
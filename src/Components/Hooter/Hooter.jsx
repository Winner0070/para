import React from "react";
import './Hooter.css';
import { Parallax } from 'react-parallax';
import Back from '../img/black.png'

const Hooter = () => {
    return (
        <Parallax bgImage={Back} strength={500}>
            <div className="hooter_end">
                fgfgииав
            </div>
        </Parallax>
    )
}

export default Hooter;
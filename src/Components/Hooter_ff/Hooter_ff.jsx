import React from "react";
import './Hooter_.css';
import { Parallax } from 'react-parallax';
import Flo from '../img/q.jpg';

const Hooter_ff = () => {
    return (
        <div>
            <Parallax bgImage={Flo} strength={500}>
                <div className="erra">
                    <div className="qwe">
                        <h3 className="p_qwe">Пустыня — территория в разных природных зонах, отличающаяся крайне засушливым климатом, где испаряемость в несколько раз превышает количество выпавших осадков.</h3>
                    </div>
                    <div className="qwe_w">
                        <h3></h3>
                    </div>
                </div>
            </Parallax>
            <div className="hg"></div>
            <Parallax strength={500}>
                <div className="hooter_r">
                    <video
                        src=""
                        width='1440'
                        height='680'
                        controls
                        autoPlay
                    />
                </div>
            </Parallax>
        </div>
    )
}

export default Hooter_ff;
import React from "react";
import './Hooter_.css';
import { Parallax } from 'react-parallax';
import Flo from '../img/q.jpg';
import ret from '../img/city.jpg';

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
            <Parallax bgImage={ret} strength={700}>
                <div className="hg"><h1 className="eee">Приятного просмотра</h1></div>
            </Parallax>
            <Parallax strength={500}>
                <div className="hooter_r">
                    <video
                        src="https://www.youtube.com/watch?v=K_tJTVmacHY&ysclid=m1sah5hk8o239668800"
                        width='1440'
                        height='680'
                        controls
                        autoPlay
                    />
                </div>
            </Parallax>
            <div className="rrr"></div>
        </div>
    )
}

export default Hooter_ff;
import React from 'react';

import Ct1 from '../../img/cta-img.png';
import Ct2 from '../../img/hand-bag.png';
import Ct3 from '../../img/t-shirt.png';
import Ct4 from '../../img/print-box.png';
import CtBg from '../..//img/cta-bg.jpg';
import { Link } from 'react-router-dom';

const CtaSection = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-wrapper bg-cover" style={{backgroundImage: `url(${CtBg})`} }>
                    <div className="cta-image">
                        <img src="https://prinoz-react.wpocean.com/static/media/cta-img.2f8a53cc05c60e55ec3e.png" alt="img" />
                    </div>
                    <div className="hand-bag float-bob-x">
                        <img src={Ct2} alt="img" />
                    </div>
                    <div className="t-shirt-shape float-bob-x">
                        <img src="data:image/png;base64,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" alt="img" />
                    </div>
                    <div className="prite-box float-bob-y">
                        <img src={Ct4} alt="img" />
                    </div>
                    <div className="section-title">
                        <h6 className="wow fadeInUp">printing Service</h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Ready To Create Some <br />
                                Custom Products?
                        </h2>
                    </div>
                    <Link onClick={ClickHandler} to="/about" className="theme-btn mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">more about us</Link>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
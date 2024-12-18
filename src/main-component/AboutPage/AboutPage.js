import React, { Fragment } from 'react';
// import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import About2 from '../../components/about2/about2';
import MarqueeSection from '../../components/MarqueeSection/MarqueeSection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import FunFact from '../../components/FunFact/FunFact';
import WorksSection from '../../components/WorksSection/WorksSection';
import CtaVideoSection from '../../components/CtaVideoSection/CtaVideoSection';
import ProcessSectionS2 from '../../components/ProcessSectionS2/ProcessSectionS2';
import TestimonialSectionS3 from '../../components/TestimonialSectionS3/TestimonialSectionS3';
import FooterS3 from '../../components/footerS3/FooterS3';
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import ServiceBg from '../../img/service/service-bg.jpg'
const AboutPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'header-section-2 style-two'} />
            <PageTitle pageTitle={'Digital printing Service'} pagesub={'About Company'} />
            <About2 hclass={'about-section section-padding'} />
            <MarqueeSection hclass={'marquee-section'} />
            <ServiceSection hclass={'service-section bg-cover section-padding'} Bg={ServiceBg} />
            <FunFact hclass={'counter-section fix section-padding'} />
            <WorksSection hclass={'about-feature-section fix section-padding pt-0 bg-cover'} eclass={'about-feature-wrapper style-2'} />
            <CtaVideoSection  />
            <ProcessSectionS2 />
            <TestimonialSectionS3 />
            
            <FooterS3 />
            <CursorMaus />
        </Fragment>
    )
};
export default AboutPage;

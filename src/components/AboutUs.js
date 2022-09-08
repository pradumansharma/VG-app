import React from "react";
import { Fragment } from "react";

import aboutusImage from '../assets/aboutus.png';

import classes from './aboutUs.module.css';

const AboutUs = () => {
    return (
        <Fragment>
        <div className={classes.tag}>
            <div className={classes['main-image']}>
                <img  src={aboutusImage} alt='standing female' />
            </div>
            <p className={classes.p}>
                VATARI GARMENTS a 100% export—oriented garments manufacturing company, was 
                established in the dawn of the new millennium with a vision to contribute towards the 
                industrial growth of INDIA.<br/><br/>
                During its journey over the last one decade, VATARI GARMENTS has achieved remarkable 
                evolution and is now one of the major manufactures and exporters of ready-made 
                garments in the country. When it comes to ready-made garments, VATARI GARMENTS is a 
                “cut above the rest”. Being a fully—integTated vertical composite unit, from fabric 
                to the finished garment, VATARI GARMENTS prides itself in offring to its customers a 
                one-stop solution to all garment demands. We have a technology driven company that 
                strives to constantly improve its production processes, while closely preserving our 
                commitment towards highest quality and guaranteed customer satisfaction.<br/><br/>
                Privately owned and family operated, we take immense pride in our dedicated team and the
                 high quality of textiles and garments that we manufacture and export to different parts 
                 of the world. We, as a nation,are gradually earning the reputation of an emerging 
                 global market, and we are honored to contribute to this universal success.<br/>
            </p>
        </div>
        </Fragment>
    );
}

export default AboutUs;
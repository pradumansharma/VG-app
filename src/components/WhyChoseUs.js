import React from 'react';

import chainImage from '../assets/chain.png';

import classes from './WhyChoseUs.module.css';

const WhyChoseUs = () => {
    return (
        <div className={classes.tag}> 
            <h2>Why chosse us?</h2>
            <div className={classes['main-image']}>
                <img  src={chainImage} alt='chain' />
            </div>
        </div>
    );
}

export default WhyChoseUs;
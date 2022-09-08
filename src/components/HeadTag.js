import React from 'react';

import threadNiddleImage from '../assets/threadniddle.jpg';

import classes from './headTag.module.css';

const HeadTag = () => {
    return (
        <div className={classes.tag}>
            <div className={classes['main-image']}>
                <img  src={threadNiddleImage} alt='thread niddle' />
            </div>
            <p className={classes.p}>
                Our missing is to create a fashion call that alues the "<b>UNIQUE</b>" in individual 
                fishum statementy by refocusing the concept of "<b>CUSTOMIZATION</b>" on the costemer base.
            </p>
            
        </div>
    );
}

export default HeadTag;
import React, {Fragment} from 'react';

import mainImage from '../assets/main.jpg';

import classes from "./header.module.css";

const Header= () => {
return(
    <Fragment >
      <header className={classes.header}>
        <h1 className={classes.h1}>VG</h1>
        <div className={classes.subheader}>
            <button className={classes.toggle}>Home</button> 
            <button className={classes.toggle}>About</button> 
            <button className={classes.toggle}>Contact</button> 
        </div>
      </header>
      <div className={classes['main-image']}>
        <img src={mainImage} alt='A garment industry insite' />
      </div>
    </Fragment>
)

}

export default Header;
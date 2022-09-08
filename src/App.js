import React from 'react';

import './App.css';
import Header from "./Nav/Header";
import HeadTag from "./components/HeadTag";
import WhyChoseUs from "./components/WhyChoseUs";
import AboutUs from "./components/AboutUs";
import FooterFir from "./components/FooterFir";
import classes from "./app.module.css";
function App() {
 

  return (
    <div>
      <Header></Header>
      <div className={classes.bodybg} >
      <HeadTag/>
      <div><p className={classes.heading} >Welcome</p></div>
      <WhyChoseUs/>
      <AboutUs/>
      <FooterFir/>
      
      </div>
    </div>
  );
}

export default App;

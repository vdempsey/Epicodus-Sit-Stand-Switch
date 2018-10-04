import React from 'react';
import Banner from './Banner';
import Header from './Header';
import TestimonialList from './TestimonialList';
import Footer from './Footer';
import Menu from './Menu';


function SplashPage(){
  return (
    <div>
      <Header/>
      <div className="main-container">
        <Banner bannerText='Activate your 8 to 5' />
        <Menu />
        <TestimonialList />
      </div>
      <Footer />
    </div>
  );
}

export default SplashPage;

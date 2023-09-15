import React from 'react';
import './Banner.css'
import img1 from '../../ASSETS/Images/banner1.png'
import img2 from '../../ASSETS/Images/banner2.png'
import img3 from '../../ASSETS/Images/banner3.png'


const Banner = () => {
  return (
    <section className="banner-container animate">
      <div className="banner" id="down">
        <img src={img1} alt="" />
        <div className="content">
          <span>best prices</span>
          <h3>Vegetables</h3>
          <a href="#" className="btn" style={{ backgroundColor: '#28B67E' }}>
            shop now
          </a>
        </div>
      </div>

      <div className="banner">
        <img src={img2} alt="" />
        <div className="content">
          <span>best prices</span>
          <h3>fruits</h3>
          <a href="#" className="btn" style={{ backgroundColor: '#f153ff' }}>
            shop now
          </a>
        </div>
      </div>

      <div className="banner">
        <img src={img3} alt="" />
        <div className="content">
          <span>best prices</span>
          <h3>rare</h3>
          <a href="#" className="btn" style={{ backgroundColor: '#ff914d' }}>
            shop now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;

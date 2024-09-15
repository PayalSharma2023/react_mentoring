import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Homepage() {
  return (
    <div>
      <div className="nav">
        <div className="container">
          <div className="nav-items">
            <ul>
              <li>
                <a href="">HOME</a>
                </li>
              <li>
                <a href="">ABOUT</a>
                </li>
              <li>
                <a href="">SHOP</a>
                </li>

              <div className="logo">HomDEco</div>
              <li>
                <a href="">FAQ</a>
                </li>
              <li>
                <a href="">BLOG</a>
                </li>
              <li>
                <a href="">CONTACT</a>
                </li>
            </ul>
          </div>

          <div className="cart">
            <HiOutlineShoppingBag />
          </div>
        </div>
      </div>

      
     <div className="hero"> 
        <div className="container2">
            <div className="title">
                <div className="text">
                Lorem ipsum dolor sit amet, consectetur
                </div>
                <div className="sub-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue risus nibh id accumsan ut lectus euismod ipsum cursus. Pulvinar nulla aliquam blandit tortor adipiscing enim tristique nibh.
                </div>
            </div>
            <div className="hero-img-1">
                <img src="src/assets/hero-img-1.png" alt="back" width="100px" height="100px"/>
            </div>
            <div className="hero-img-2">
            <img src="src/assets/hero.png" alt="img" width="100px" height="100px"/>            
            </div>
        </div>
     </div>
      
    </div>
  );
}

export default Homepage;

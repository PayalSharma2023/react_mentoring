import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import "../style/demo.css"

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

              <div className="logo">HomDEcoR</div>
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
              Home Decor <span className="ipsun">where</span> syte meets,{" "}
              <span className="ipsun">comfort</span>
            </div>
            <div className="sub-text">
              Transform your living space into a home with our curated
              collection of home décor pieces. From modern elegance to timeless
              classics, we bring you the best in design, quality, and
              functionality.
            </div>
          </div>
          <div className="hero-img">
            <div className="hero-img-1">
              <img src="src/assets/hero-img-1.png" alt="back" />
            </div>
            <div className="hero-img-2">
              <img src="src/assets/hero.png" alt="img" />
            </div>
          </div>
        </div>
      </div>

      <div className="section-one">
        <div className="container3">
          <div className="section-one-img">
            <img src="src/assets/img1.png" alt="" />
          </div>
          <div className="section-one-content">
            <div className="content">
              <div className="sub-title">SUBTITLE</div>
              <div className="top">
                Lorem <span className="ipsun">ipsum</span>{" "}
              </div>
              <div className="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                sit aenean suspendisse tincidunt odio placerat in. Porta tellus
                libero egestas commodo nulla gravida egestas. Lorem tellus
                condimentum porttitor vel, nec ac ipsum nunc feugiat.
              </div>
              <div className="btn">Lorem Ipsum</div>
            </div>
            <div className="section-one-info">
              <select>
                <option value="option1">Information</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <select>
                <option value="option1">Information</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="section-one">
        <div className="container3">
          <div className="section-one-content">
            <div className="section-one-info">
              <select>
                <option value="option1">Information</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <select>
                <option value="option1">Information</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="content">
              <div className="sub-title">SUBTITLE</div>
              <div className="top">
                Lorem <span className="ipsun">ipsum</span>{" "}
              </div>
              <div className="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                sit aenean suspendisse tincidunt odio placerat in. Porta tellus
                libero egestas commodo nulla gravida egestas. Lorem tellus
                condimentum porttitor vel, nec ac ipsum nunc feugiat.
              </div>
              <div className="btn">Lorem Ipsum</div>
            </div>
          </div>
          <div className="section-one-img">
            <img src="src/assets/img2.png" alt="" />
          </div>
        </div>
      </div>

      <div className="section-one">
        <div className="container3">
          <div className="section-one-img">
            <img src="src/assets/img3.png" alt="" />
          </div>
          <div className="section-one-content">
            <div className="content">
              <div className="sub-title">SUBTITLE</div>
              <div className="top">
                Lorem <span className="ipsun">ipsum</span>{" "}
              </div>
              <div className="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                sit aenean suspendisse tincidunt odio placerat in. Porta tellus
                libero egestas commodo nulla gravida egestas. Lorem tellus
                condimentum porttitor vel, nec ac ipsum nunc feugiat.
              </div>
              <div className="btn">Lorem Ipsum</div>
            </div>
            <div className="section-one-info">
              <select>
                <option value="option1">Information</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <select>
                <option value="option1">Information</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="info">
        <div className="box">
          <div className="info-text">
            Lorem ipsum <span className="span">dolor sit amet,</span>{" "}
            consectetur adipiscing elit.{" "}
            <span className="span">Vulputate ac id</span> dapibus adipiscing
            vel. Tincidunt dignissim morbi{" "}
            <span className="span">sagittis eu mattis</span> mauris.
          </div>
        </div>
        <img src="src/assets/back.png" alt="" />
      </div>

      <div className="contact">
        <div className="contact-top">
          <h2 className="sub">contact us</h2>
          <h1 className="top2">CONTACT</h1>
          <p className="para2">
            Get in touch with us for any questions, concerns, or inquiries you
            might have. Our team is here to assist you with all your needs.
          </p>
        </div>
        <div className="form">
          <form action="">
            <div className="up">
              <div>
                <label htmlFor="">First name</label>
                <br />
                <input type="text" placeholder="First name" />
              </div>
              <div>
                <label htmlFor="">Last name</label>
                <br />
                <input type="text" placeholder="Last name" />
              </div>
            </div>

            <div>
              <label htmlFor="">Email</label>
              <br />
              <input className="big"  type="text" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="">Phone number</label>
              <br />
              <input className="big" type="text" placeholder="=123 000-0000" />
            </div>
            <div>
              <label htmlFor="">Message</label>
              <br />
              <textarea name="" id="">
                Leave us a message
              </textarea>
            </div>

            <button className="btn-2">send message</button>
          </form>
        </div>
      </div>

      <div className="section-two">
        <img src="src/assets/banner.png" alt="" />
        <div className="jaadu">
        <div className="heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</div>
        <div className="btn-3">Lorem ipsum</div>
        </div>
        
      </div>

      <div className="footer">
        <div className="footer-top">
            <div className="mylogo">HomDEcoR</div>
            <div className="footer-list">
                <ul>
                    <li>
                        <a href="">HOME</a>
                    </li>
                    <li>
                        <a href="">PRODUCT</a>
                    </li>
                    <li>
                        <a href="">COMPANY</a>
                    </li>
                    <li>
                        <a href="">BLOG</a>
                    </li>
                    <li>
                        <a href="">HELP</a>
                    </li>
                    <li>
                        <a href="">PRIVACY</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="copyright">© 2023 MyCompany. All rights reserved.</div>
            <div className="footer-bottom-li">
                <ul>
                    <li>
                        <a href="">Terms</a>
                    </li>
                    <li>
                        <a href="">Privacy</a>
                    </li>
                    <li>
                        <a href="">Cookies</a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

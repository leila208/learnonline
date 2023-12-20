import React from "react";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot">
          <div className="topfoot">
            <div className="topdiv">
              <div className="one">
                <div className="topfoottext">
                  <h3>Work hours</h3>
                  <p>10:00-20:00</p>
                </div>
              </div>
              <div className="one">
                <div className="topfoottext">
                  <h3>For information</h3>
                  <p>+994*********</p>
                </div>
              </div>
              <div className="one">
                <div className="topfoottext">
                  <h3>7/24 </h3>
                  <p>Technical support</p>
                </div>
              </div>
              <div className="one">
                <div className="topfoottext">
                  <h3>Programs</h3>
                  <p>Exchange programs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="otherfoot">
            <div className="bottomfoot">
              <div className="bottomdiv">
                <div className="bottomtwo">
                  <NavLink to="/">
                    {" "}
                    <h1>
                      <span>EDU</span>
                    </h1>
                  </NavLink>

                  <div className="two">
                    <div className="bottomicon">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="bottomtext">
                      <p>Education center</p>
                    </div>
                  </div>
                  <div className="two">
                    <div className="bottomicon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="bottomtext">
                      <p>+994*********</p>
                    </div>
                  </div>
                  <div className="two">
                    <div className="bottomicon">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="bottomtext">
                      <p>lorem@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="bottomtwo">
                  <NavLink to="/">
                    {" "}
                    <h1>
                      <span>PROGRAMS</span>
                    </h1>
                  </NavLink>

                  <div className="two">
                    <div className="bottomicon">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="bottomtext">
                      <p> Diploma Degree</p>
                    </div>
                  </div>
                  <div className="two">
                    <div className="bottomicon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="bottomtext">
                      <p>BS Degree Beginner </p>
                    </div>
                  </div>
                  <div className="two">
                    <div className="bottomicon">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="bottomtext">
                      <p>Intermediate </p>
                    </div>
                  </div>
                </div>
                <div className="bottomtwo">
                  <h1>
                    <span>Help</span>
                  </h1>
                  <ul>
                    <li>
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                      <NavLink to="/#">Faq</NavLink>
                    </li>
                    <li>
                      <NavLink to="/aboutus">Staff</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

function Header(props) {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  
  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 350
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  const [istoggled, setIstoggled] = useState(false);
  const handleClick = () => {
    setIstoggled(!istoggled);
  };
  console.log(istoggled)
  return (
    <>
      <header className="header-section d-none d-xl-block">
        {/* <Modal /> */}

          <div className={istoggled ? "mobile-menu mobile-menu-open" : ""}>
            <ul className="mobile-menu">
              <button
                id="finish"
                onClick={() => {
                  setIstoggled(!istoggled);
                }}
              >
                &times;
              </button>
         
             
              <li>
                <NavLink onClick={handleClick} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick} to="/contact">
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink onClick={handleClick} to="/aboutus">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
    

        {/* <div className="container"> */}
        <div className="container">
          {/* <div className="header"> */}
          <div className="navbar">
            <div className="logo">
              <ul className="all">
                <li>
                  <p id="logo">Logo</p>
                </li>
              </ul>
            </div>
            <ul className="all">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/aboutus">About</NavLink>
              </li>
            </ul>
            <NavLink to="/contact">
              <button className="contactBtn">Contact</button>
            </NavLink>
          
            <i
              className="fa-solid fa-bars mobile-toggle"
              onClick={() => {
                setIstoggled(!istoggled);
              }}
            />
          </div>
        </div>
      </header>
    </>
  );
}
let t = (a) => a;
export default connect(t)(Header);

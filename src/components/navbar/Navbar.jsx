import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/sasha0.png";
const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#who-am-I">Who am I?</a></p>
    <p><a href="#facing-IT">Facing IT</a></p>
    <p><a href="#grounds-for-learning">Grounds for learning</a></p>
    <p><a href="#have-a-look">Have a look...</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="sasha__navbar">
      <div className="sasha__navbar-links">
        <div className="sasha__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="sasha__navbar-links_container">
          <Menu />
        </div>
      </div>
      {/* <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div> */}
      <div className="sasha__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="sasha__navbar-menu_container scale-up-center">
            <div className="sasha__navbar-menu_container-links">
              <Menu />
              {/* <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

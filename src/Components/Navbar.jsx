import React from "react";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <div>
      Navbar
      {isLogged ? (
        <nav className="main-navbar">
          <div className="nav-container">
            <div className="arrow">
              <Link className="history-arrow-Link">
                <ArrowBackIosIcon />
              </Link>
              <Link className="history-arrow-Link">
                <ArrowForwardIosIcon />
              </Link>
            </div>
            <div className="nav-links">
              <Link className="nav-link">Premium</Link>
              <Link className="nav-link">Support</Link>
              <Link className="nav-link">Download</Link>
              <div className="line"></div>
              <Link className="nav-link">Sign Up</Link>
              <Link className="nav-link login-btn">Log in</Link>
            </div>
          </div>
        </nav>
      ) : (
        <div>No content</div>
      )}
    </div>
  );
};

export default Navbar;

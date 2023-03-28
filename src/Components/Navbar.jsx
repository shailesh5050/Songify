import React from "react";
import { useState, useRef, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import profile from "../assets/profile.png";
const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);

  //Profile Menu
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      Navbar
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
          {isLogged ? (
            <div className="nav-links">
              <Link className="nav-link">Premium</Link>
              <Link className="nav-link">Support</Link>
              <Link className="nav-link">Download</Link>
              <div className="line"></div>
              <Link className="nav-link">Sign Up</Link>
              <Link className="nav-link login-btn">Log in</Link>
            </div>
          ) : (
            <div>
              <Link className="nav-link premium">Premium</Link>
              <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? "composition-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                <div className="profile-toggle">
                  <img className="profile-img" src={profile} alt="profile" />
                  <p>Shailesh Kumar</p>
                  <ArrowDropDownIcon />
                </div>
              </Button>
              <Popper open={open} anchorEl={anchorRef.current} role={undefined} placement="bottom-start" transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin: placement === "bottom-start" ? "left top" : "left bottom",
                    }}
                  >
                    <Paper style={{ backgroundColor: "#090909", color: "white", width: "220px" }}>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={open} id="composition-menu" aria-labelledby="composition-button" onKeyDown={handleListKeyDown}>
                          <MenuItem onClick={handleClose}>Profile</MenuItem>
                          <MenuItem onClick={handleClose}>My account</MenuItem>
                          <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

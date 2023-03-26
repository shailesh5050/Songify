import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Divider } from "@mui/material";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/" className="sidebar-logo">
        <img src={logo} alt="" />
        <h2>Songify</h2>
      </Link>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/" className="link">
            <HomeIcon />
            Home
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/search" className="link">
            <SearchIcon />
            Search
          </Link>
        </li>

        <li className="sidebar-list-item">
          <Link to="/playlists" className="link">
            <LibraryMusicIcon />
            Playlists
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/liked" className="link">
            <FavoriteIcon />
            Liked
          </Link>
        </li>
      </ul>
      <Divider light />
    </div>
  );
};

export default Sidebar;

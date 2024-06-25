import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <input id="searchBar" type="text" placeholder="Search.." />
        </li>
        <li>
          <Link to="/playlist">Playlists</Link>
        </li>
        <li>
          <Link to="/top">Music</Link>
        </li>
        <li>
          <Link to="/settings">Account Settings</Link>
        </li>
        <li>
          <Link to="/login">Login</Link> or <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

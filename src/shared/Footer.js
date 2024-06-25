import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <h3>Social Media</h3>
        <a href="#">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
      <div className="footer">
        Site Navigation
        <br />
        <a href="/register">Register</a>
      </div>
      <div className="footer">Contact
        <p>
          <br />Email: devgirljanet@gmail.com
          <br /><a href="https://linkedin.com/in/janet-phan">LinkedIn</a>
        </p>
      </div>
      <div className="footer">
        <a href="/"><img src="../images/bumblebeat-logo.png" /></a>
      </div>
    </footer>
  );
};

export default Footer;

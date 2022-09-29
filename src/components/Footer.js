import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer bg-dark fixed-bottom">
      <a href="https://github.com/Jevenden">
        <img
          src="https://img.icons8.com/color/48/000000/github--v1.png"
          alt="Github"
          className="icon"
        />
      </a>
      <a href="https://www.linkedin.com/in/john-evenden-a9305573/">
        <img
          src="https://img.icons8.com/fluent/48/000000/linkedin.png"
          alt="LinkedIn"
          className="icon"
        />
      </a>
      <a href="https://johnevenden.wordpress.com/">
        <img
          src="https://img.icons8.com/ios-glyphs/48/ffffff/sword.png"
          alt="johnevenden.com"
          className="icon"
        />
      </a>
    </footer>
  );
}

import React from "react";
import "../styles/header.css";
import Nav from "./Nav.js";

export default function Header(currentPage, handlePageChange) {
  return (
    <header className="header-title">
      <h1>John Evenden</h1>
    </header>
  );
}

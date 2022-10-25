import { useState } from "react";
import React from "react";
import Nav from "./Nav";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import ContactForm from "./pages/Contact";
import Resume from "./pages/Resume";
import Header from "./Header";
import "animate.css";

export default function Container() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <ContactForm />;
      case "Resume":
        return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header className="header">
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </Header>
      <Home />
    </div>
  );
}

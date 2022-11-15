import { useState } from "react";
import Nav from "../nav/Nav";
import Projects from "../pages/projects/Projects";
import Home from "../pages/home/Home";
import ContactForm from "../pages/contact/Contact";
import Resume from "../pages/resume/Resume";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "animate.css";
import "./container.css";

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
      <div className="bg-dark">
        <Header className="header"></Header>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

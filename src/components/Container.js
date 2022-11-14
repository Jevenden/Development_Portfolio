import { useState } from "react";
import Nav from "./Nav";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import ContactForm from "./pages/Contact";
import Resume from "./pages/Resume";
import Header from "./Header";
import Footer from "./Footer";
import "animate.css";
import "../styles/container.css";

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

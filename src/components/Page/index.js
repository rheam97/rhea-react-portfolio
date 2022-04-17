import React from "react";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import Resume from "../Resume";
import Content from "./Content";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Projects />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div className="page">
      <Content>{renderPage()}</Content>
    </div>
  );
}

export default Page;
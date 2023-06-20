import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Portfolio from "./components/pages/Portfolio";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import BlogSecondPage from "./components/pages/BlogSecondPage";
import Navbar from "./components/navbar/Navbar";
import { useState, useEffect, useRef } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  const sidebarRef = useRef();
  const desktopSidebarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        desktopSidebarRef.current &&
        !desktopSidebarRef.current.contains(event.target)
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter basename="/muavia-portfolio">
        <div className="sidebar" ref={sidebarRef}>
          <div className="sidebar-desktop" ref={desktopSidebarRef}>
            <Sidebar />
          </div>
          {toggle ? <Sidebar toggle={toggle} /> : ""}
        </div>
        <div className="pages">
          <Navbar
            toggle={!toggle}
            setToggle={!toggle}
            handleClick={handleClick}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog/BlogSecondPage" element={<BlogSecondPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

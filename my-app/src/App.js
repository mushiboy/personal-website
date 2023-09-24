import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import AboutMe from "./AboutMe";
import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "./Contact";
import Projects from "./Projects";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Routes location={location} key={location.pathname}>
            <Route index element={<AboutMe />} />
            <Route path="/contact-me" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../components/Loading/Loading.jsx";
import { About, Home } from "../pages";
import WelcomeMessage from "../components/Loading/WelcomeMessage.jsx";

const AllRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowWelcome(true);
      setTimeout(() => {
        setShowWelcome(false);
      }, 2000);
    }, 8000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : showWelcome ? (
        <WelcomeMessage/>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default AllRoutes;

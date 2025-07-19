import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FeaturesGrid from "../components/FeaturesGrid";

const Home = () => {
  const location = useLocation();
  const featuresRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollTo === "features-grid") {
      featuresRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      
      <div ref={featuresRef}>
        <FeaturesGrid />
      </div>
    </div>
  );
};

export default Home;

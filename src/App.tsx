import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Bulletin, Careers, Home, NotFound } from "./pages";
import ScrollToTop from "./utils/ScrollToTop";
import CareerDetails from "./pages/CareerDetails";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:careerId" element={<CareerDetails />} />

        <Route path="/bulletin" element={<Bulletin />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

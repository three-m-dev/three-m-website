import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Bulletin,
  CareerDetails,
  Careers,
  Home,
  NotFound,
} from "./pages";
import useScrollToTop from "./utils/ScrollToTop";

const RouterContent = () => {
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/careers/:careerId" element={<CareerDetails />} />
      <Route path="/bulletin" element={<Bulletin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <RouterContent />
    </Router>
  );
};

export default App;

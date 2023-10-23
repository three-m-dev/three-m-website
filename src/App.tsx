import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Bulletin, Careers, Home, NotFound } from "./pages";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/bulletin" element={<Bulletin />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

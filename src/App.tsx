import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, NotFound } from "./pages";
import ScrollToTop from "./utils/scrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

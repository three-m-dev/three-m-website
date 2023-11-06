import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Bulletin,
  BulletinPost,
  CareerApplication,
  CareerDetails,
  Careers,
  Contact,
  Home,
  NotFound,
  Services,
} from "./pages";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:careerId" element={<CareerDetails />} />
        <Route
          path="/careers/:careerId/application"
          element={<CareerApplication />}
        />

        <Route path="/bulletin" element={<Bulletin />} />
        <Route path="/bulletin/:postId" element={<BulletinPost />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

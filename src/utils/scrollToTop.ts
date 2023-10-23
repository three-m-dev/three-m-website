import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const options: ScrollToOptions = {
      top: 0,
      left: 0,
      behavior: "smooth",
    };

    document.documentElement.scrollTo(options);
    document.body.scrollTo(options);
  }, [pathname]);
};

export default useScrollToTop;

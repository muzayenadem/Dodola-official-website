import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Forces page to scroll to top on navigation
    window.scrollTo(0, 0);

    // Disable browser scroll restoration (helps when using the back button)
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;

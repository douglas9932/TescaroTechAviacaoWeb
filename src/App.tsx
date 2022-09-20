import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { FrmLogin } from "./Formularios/FrmLogin";
import { useEffect } from "react";

import {HomeDev} from "./Formularios/HomeDev";
import {Home} from "./Formularios/Home";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/Home":
        title = "Home";
        metaDescription = "Home";
        break;
      case "/HomeDev":
        title = "HomeDev";
        metaDescription = "HomeDev";
        break;
     
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<FrmLogin />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/HomeDev" element={<HomeDev />} />
    </Routes>
  );
}
export default App;

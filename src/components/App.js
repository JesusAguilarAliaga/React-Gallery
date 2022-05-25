import "./../styles/style.css"
import HomePage from "./../components/pages/homePage";
import Header from "./sections/header";
import { Routes, Route} from "react-router-dom";
import GalleryPage from "./pages/galleryPage";
import AboutUs from "./pages/aboutUs";



const App = () => {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/GalleryPage" element={<GalleryPage />} />
          <Route path="/AboutUs" element={<AboutUs petition="aboutUs" />} />
      </Routes>
    </>
  )
}

export default App;

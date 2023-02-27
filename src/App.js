import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EcoSystems from "./pages/Ecosystems/Ecosystems";
import ScrollToTop from "./utils/ScrollToTop/ScrollToTop";
import Manitoring from "./pages/Manitoring/Manitoring";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Drilling from "./pages/Drilling/Drilling";
import Laboratory from "./pages/Laboratory/Laboratory";
import SearchingRoutes from "./pages/SearchingRoutes/SearchingRoutes";
import KernoSklad from "./pages/KernoSklad/KernoSklad";
import FileManager from "./pages/FileManager/FileManager";

function App() {
  return (
    <div className="app">
      <ToastContainer />
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ecosystems" element={<EcoSystems />} />
          <Route path="/monitoring" element={<Manitoring />} />
          <Route path="/drilling" element={<Drilling />} />
          <Route path="/laboratory" element={<Laboratory />} />
          <Route path="/searchRoutes" element={<SearchingRoutes />} />
          <Route path="/kernosklad" element={<KernoSklad />} />
          <Route path="/filemanager" element={<FileManager />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

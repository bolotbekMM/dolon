import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EcoSystems from "./pages/Ecosystems/Ecosystems";
import ScrollToTop from "./utils/ScrollToTop/ScrollToTop";
import Manitoring from './pages/Manitoring/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

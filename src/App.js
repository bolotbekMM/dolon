import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EcoSystem from './pages/ecosystem/index';
import Manitoring from './pages/Manitoring/index';

function App() {
  return (
    <div className="app">
      

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ecosystem" element={<EcoSystem />} />
          <Route path="/monitoring" element={<Manitoring />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

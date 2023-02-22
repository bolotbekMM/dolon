import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ecosystems from "./pages/Ecosystems/Ecosystems";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ecosystems" element={<Ecosystems />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

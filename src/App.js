import React, { useEffect, useState } from "react";
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
import Geology from "./pages/Geology/Geology";
import Marksheideriya from "./pages/Marksheideriya/Marksheideriya";
import i18n from "i18next";
import Contucts from "./pages/Contacts/Contucts";

function setLanguage() {
  const userLanguage = navigator.language || navigator.userLanguage;
  if (userLanguage.startsWith("ru")) {
    i18n.changeLanguage("ru");
  } else if (userLanguage.startsWith("en")) {
    i18n.changeLanguage("en");
  } else {
    i18n.changeLanguage("en");
  }
}

function App() {
  useEffect(() => {
    setLanguage();
  }, []);

  return (
    <div className="app">
      <Router />
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
          <Route path="/geology" element={<Geology />} />
          <Route path="/marksheideria" element={<Marksheideriya />} />
          <Route path="/contacts" element={<Contucts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

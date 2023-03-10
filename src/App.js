import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
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
import AboutUs from "./pages/about/index";
import Contucts from "./pages/Contacts/Contucts";
import News from "./pages/news/index";
import New from "./pages/news/New";

function App() {
  function setLanguage() {
    i18n.changeLanguage("en");
    // const userLanguage = navigator.language || navigator.userLanguage;

    // if (userLanguage.startsWith("ru")) {
    //   i18n.changeLanguage("ru");
    // } else if (userLanguage.startsWith("en")) {
    //   i18n.changeLanguage("en");
    // } else {
    //   i18n.changeLanguage("en");
    // }
  }
  useEffect(() => {
    setLanguage();
  }, []);

  return (
    <div className="app">
      <ToastContainer />
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
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contacts" element={<Contucts />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<New />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

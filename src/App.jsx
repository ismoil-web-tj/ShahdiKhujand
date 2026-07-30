// src/App.jsx
import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";
import ConfectioneryHeader from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./Footer/Footer";

function App() {
  return (
    <LanguageProvider>
      <ConfectioneryHeader />
      <Hero />
      <Footer/>
    </LanguageProvider>
  );
}

export default App;
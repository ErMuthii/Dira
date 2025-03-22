
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Assessment from "./components/Assessment";
import Results from "./components/Results";

function App() {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen" style={{ backgroundColor: "#fef9ef" }}>
        <main className="mb-auto">
         <Navigation />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/results" element={<Results/>} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;

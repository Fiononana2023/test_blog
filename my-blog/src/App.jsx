import "./App.css";
import Blog from "./Blog";
import Trips from "./Blogs/Trips";

import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Face } from "./Face";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <br />
        <div className="flex h-100 items-center justify-center bg-gradient-to-tr to-blue-700 from-indigo-900 p-10">
          <div className="w-50">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
              Madagascar et sa biodiversité
            </h1>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Trips />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/face" element={<Face />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

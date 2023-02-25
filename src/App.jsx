import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//styles
import "./App.scss";

//components
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

//pages
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { NotFound } from "./Pages/NotFound";
import { Category } from "./Pages/Category";
import { Recipe } from "./Pages/Recipe";


function App() {
  return (
    <Router basename="/react-cooking-spa-app">
      <div className="app">
        <Header />
        <main className="container main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/category/:name" element={<Category />}></Route>
            <Route path="/meal/:id" element={<Recipe />}></Route>
            <Route element={<NotFound />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

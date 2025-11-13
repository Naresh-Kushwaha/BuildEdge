// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServiceCategory from "./components/ServiceCategory";
import Header from "./components/Header";
import About from "./pages/About";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { servicesData } from "./data/serviceData";

function Home() {
  return (
    <section id="services" className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Our Services</h1>
      {servicesData.map((c) => (
        <ServiceCategory key={c.id} icon={c.icon} category={c.category} services={c.services} />
      ))}
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

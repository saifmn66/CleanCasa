import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rendezvous from "./pages/Rendezvous";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="appointment" element={<Rendezvous />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

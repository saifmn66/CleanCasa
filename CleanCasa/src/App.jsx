import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Toaster } from 'react-hot-toast';
import Rendezvous from "./pages/Rendezvous";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminRoute from "./components/AdminRoute";
import Unauthorized from "./pages/Unauthorized";
import Dash from "../admin/Dash";
import NotFound from "./pages/NotFound";
import Aboutus from "./pages/Aboutus";

function App() {
  return (
    <BrowserRouter>
    <Toaster />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route 
          path="appointment" 
          element={
            <ProtectedRoute>
              <Rendezvous />
            </ProtectedRoute>
          } 
        />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Login />} />
        <Route 
          path="dashboard" 
          element={
            <AdminRoute>
              <Dash/>
            </AdminRoute>
          } 
        />
        <Route path="unauthorized" element={<Unauthorized />} /> 
        <Route path="*" element={<NotFound />} />
        <Route path="aboutus" element={<Aboutus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";  
import Login from "./components/login"; 
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Film from "./Film";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<DashboardWithNavbar />} />
      <Route path="/film" element={<Film />} />
      
      </Routes>
    </BrowserRouter>
  );
}


function DashboardWithNavbar() {
  return (
    <>
      <Navbar />
      <Dashboard />
      <Film />
    </>
  );
}

export default App;

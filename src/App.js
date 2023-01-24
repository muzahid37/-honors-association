import { Button } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUS from "./Components/Pages/About us/AboutUS";
import Blogs from "./Components/Pages/Blogs/Blogs";
import Contact from "./Components/Pages/Contact/Contact";
import Home from "./Components/Pages/Home/Home";
import Footer from "./Components/ShearedPage/Footer";
import NavBar from "./Components/ShearedPage/NavBar";

function App() {
  return (
    <div className="">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/aboutUS" element={<AboutUS />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

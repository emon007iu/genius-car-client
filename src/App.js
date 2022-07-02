import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import AddService from "./components/AddService/AddService";
import Experts from "./components/Experts/Experts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ManageServices from "./components/ManageServices/ManageServices";
import NotFound from "./components/NotFound/NotFound";
import Order from "./components/Order/Order";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import Services from "./components/Services/Services";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path="/service/:serviceId" element={<ServiceDetails/>} />
        <Route path="/experts" element={<Experts/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/addservice" element={<AddService/>} />
        <Route path="/manage" element={<ManageServices/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

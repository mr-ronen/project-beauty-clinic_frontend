import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import NoPage from "./pages/NoPage/NoPage";
import Courses from "./pages/Courses/Courses";
import Cart from "./pages/Cart/Cart";
import UserRegistration from "./pages/UserRegistration/UserRegistration";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import CheckOut from "./pages/CheckOut/CheckOut";
import LogIn from "./pages/LogIn/LogIn";
import Treatments from "./pages/Treatments/Treatments";
import Administration from "./pages/Administration/Administration";
import ShopManagement from "./pages/ShopManagement/ShopManagement";
import UsersManagement from "./pages/UsersManagement/UsersManagement";
import ProductPage from "./pages/ProductPage/ProductPage";
import Terms from "./pages/Terms/Terms";
import Shipping from "./pages/Shipping/Shipping";
import Service from "./pages/Service/Service";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/UserRegistration" element={<UserRegistration />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/Treatments" element={<Treatments />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/CourseDetails" element={<CourseDetails />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/Administration" element={<Administration />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/ShopManagement" element={<ShopManagement />} />
          <Route path="/ShopManagement/:id" element={<ShopManagement />} />
          <Route path="/Shipping" element={<Shipping />} />
          <Route path="/UsersManagement" element={<UsersManagement />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

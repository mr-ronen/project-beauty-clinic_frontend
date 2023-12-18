import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import NoPage from "./pages/NoPage/NoPage";
import Courses from "./pages/Courses/Courses";
import Cart from "./pages/Cart/Cart";
import UserAuthentication from "./pages/UserAuthentication/UserAuthentication";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import CheckOut from "./pages/CheckOut/CheckOut";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/UserAuthentication" element={<UserAuthentication />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/CourseDetails" element={<CourseDetails />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

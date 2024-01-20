import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/slices/productSlice";
import Footer from "../../components/Footer/Footer";
import cardphoto from "../../assets/images/course.png";
import "./Courses.css";

const Courses = () => {
  return (
    <>
      <Header />
      <div className="herob">{}</div>
      <h2>Courses</h2>

      <Footer />
    </>
  );
};

export default Courses;

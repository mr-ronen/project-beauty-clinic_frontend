import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/slices/productSlice";
import Footer from "../../components/Footer/Footer";
import productService from "../../services/productService";

const CourseDetails = () => {
  return (
    <>
      <Header />
      <h2>CourseDetails</h2>

      <Footer />
    </>
  );
};

export default CourseDetails;

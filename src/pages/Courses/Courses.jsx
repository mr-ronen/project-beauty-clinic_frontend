import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/slices/productSlice";
import Footer from "../../components/Footer/Footer";
import cardphoto from "../../assets/images/course.png";
import "./Courses.css";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import cardimage from "../../assets/images/homecardphoto.webp";
import cardphoto2 from "../../assets/images/homecardphoto2.webp";
import cardphoto3 from "../../assets/images/homecardphoto3.webp";

const Courses = () => {
  return (
    <>
      <Header />
      <div className="herob">{}</div>
      <h2>Courses</h2>
      <div className="cards-container">
      <DetailsCard
        title="גבות "
        description="אני מזמינה אותך אלי לקליניקה לקבל מראה טבעי, מודרני ועדין המותאם במיוחד בשבילך."
        imageUrl={cardimage}
        buttonText="לפרטים נוספים"
      />
      <DetailsCard
        title="איילינר" 
        description="אנו מתחייבים לספק ללקוחות שלנו טיפוליים מקצועיים, ייחודיים, טבעיים ואישיים ברמה הגבוהה ביותר."
        buttonText="לפרטים נוספים"
        imageUrl={cardphoto2}
      />
      <DetailsCard
        title="הרמת ריסים "
        description="אני מזמינה אותך אלי לקליניקה לקבל מראה טבעי, מודרני ועדין המותאם במיוחד בשבילך."
        buttonText="לפרטים נוספים"
        imageUrl={cardphoto3}
      />
       <DetailsCard
        title="שפתיים "
        description="אני מזמינה אותך אלי לקליניקה לקבל מראה טבעי, מודרני ועדין המותאם במיוחד בשבילך."
        buttonText="לפרטים נוספים"
        imageUrl={cardphoto3}
      />
      </div>
      <Footer />
    </>
  );
};

export default Courses;

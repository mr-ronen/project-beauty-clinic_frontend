import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "./Card";
import cardphoto from "../../assets/images/homecardphoto.webp";
import cardphoto2 from "../../assets/images/homecardphoto2.webp";
import cardphoto3 from "../../assets/images/homecardphoto3.webp";
import cardphoto4 from "../../assets/images/homecardphoto4.webp"; 
import OpCard from "./CardOp";

const Home = () => {
  return (
    <div className="root">
      {" "}
      <Header />
      <div className="hero">{/* Content centered on the photo */}</div>
      <div className="content">
        <h2>
          אני מאמינה שכל הנשים יפות בלי איפור - אבל עם האיפור הנכון יכולות להיות
          עוצמתיות
        </h2>
        <h4>
          .ריטה יוסיפוב מאסטרית מיקרופיגמנטציה והרמות ריסים, מייסדת האקדמיה
          והקליניקה בתל אביב כיכר המדינה
          <br />
          .את הנסיון וההכשרה צברה אצל מאסטרים בינלאומיים ברחבי העולם עם דגש על
          מראה טבעי המותאם לתווי הפנים
        </h4>
        <h4>
          אנו מתחייבים לספק ללקוחות שלנו טיפוליים מקצועיים, ייחודיים, טבעיים
          ואישיים ברמה הגבוהה ביותר{" "}
        </h4>
        <Card
          title="טיפולים"
          description="אני מזמינה אותך אלי לקליניקה לקבל מראה טבעי, מודרני ועדין המותאם במיוחד בשבילך."
          buttonText="לפרטים נוספים"
          imageUrl={cardphoto}
        />
        <OpCard
          title="קורסים"
          description="אנו מתחייבים לספק ללקוחות שלנו טיפוליים מקצועיים, ייחודיים, טבעיים ואישיים ברמה הגבוהה ביותר "
          buttonText="לפרטים נוספים"
          imageUrl={cardphoto2} 
        />
        <Card
          title="הסרת איפור קבוע בלייזר"
          description="אני מזמינה אותך אלי לקליניקה לקבל מראה טבעי, מודרני ועדין המותאם במיוחד בשבילך."
          buttonText="לפרטים נוספים"
          imageUrl={cardphoto3}
        />
        <h4>
          ריטה יוסיפוב מאסטרית מיקרופיגמנטציה והרמות ריסים, מייסדת האקדמיה
          והקליניקה בתל אביב כיכר המדינה. את הנסיון וההכשרה צברה אצל מאסטרים
          בינלאומיים ברחבי העולם עם דגש על מראה טבעי המותאם לתווי הפנים.{" "}
        </h4>
        <OpCard
          title="מעוניינת להיות מודליסטית ?"
          description="קבלי טיפול במחיר מוזל, בפיקוח מלא של ריטה על ידי תלמידה בשלב המעשי."
          buttonText="לפרטים נוספים"
          imageUrl={cardphoto4} 
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="root">
      {" "}
      {/* Added class for root styling */}
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
      </div>
      <Footer />
    </div>
  );
};

export default Home;

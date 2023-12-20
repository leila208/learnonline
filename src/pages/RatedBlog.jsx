import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function RatedBlog() {
const rated = [
  {
    id: 1,
    name: "English Grammar",
    about: "24 lessons",

    image: " https://preview.colorlib.com/theme/oneschool/images/img_6.jpg",
  },
  {
    id: 2,
    name: "JS Programming Language ",
    about: "55 lessons",
    image: "https://preview.colorlib.com/theme/oneschool/images/img_3.jpg",
  },
  {
    id: 3,
    name: "Logo Design Course ",
    about: "35 lessons",
    image: "https://preview.colorlib.com/theme/oneschool/images/img_4.jpg",
  },
];
  return (
    <>
      <div className="ratedblog">
        <div className="container">
          <div className="heading">
            <h1>Our courses</h1>
          </div>
          <div className="rateblogs">
            {rated.map((a) => (
              <div
                className="rateblog"
                // data-aos="fade-up"
                // data-aos-duration="3000"
                key={a.id}
              >
                <div className="rateblog-img">
                  <img src={a.image} />
                </div>
                <div className="rated-details">
                  <div className="rated-icons">
                    <i className="fa-solid fa-right-long " id="brown"></i>
                    <ul>
                      <li>
                        <i className="fa-brands fa-facebook-f"></i>
                      </li>
                      <li>
                        <i className="fa-brands fa-twitter"></i>
                      </li>
                    </ul>
                  </div>

                  <p className="rated-h1 pcontent" id="brown">
                    {a.name}
                  </p>
                  <p className="aboutrated">{ a.about}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default RatedBlog;

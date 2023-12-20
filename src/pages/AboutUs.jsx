

import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function AboutUs() {
   const about = [
     {
       id: 1,
       first_name: "Daniel Anderson",
       last_name: "Instructor",
       image:
         "https://preview.colorlib.com/theme/knowledge/images/person2.jpg.webp",
     },
     {
       id: 2,
       first_name: "David Brook",
       last_name: "Instructor",
       image:
         "https://preview.colorlib.com/theme/knowledge/images/person4.jpg.webp",
     },
     {
       id: 3,
       first_name: "Brigeth Smith",
       last_name: "Instructor",
       image:
         "https://preview.colorlib.com/theme/knowledge/images/person3.jpg.webp",
     },
   ];

  return (
    <>
      <section>
        <div className="k">
          <p>About us</p>
        </div>
        <div className="headingg">
          <h1>About us</h1>
        </div>
        <div className="container">
          <div className="content-longg">
            <p className="one">
              Learn Education or improve your skills online today. Choose from a
              wide range of Education courses offered from top universities and
              industry leaders.
            </p>
          </div>
        </div>

        <div className="our_artists">
          <div className="container">
            <div className="headingg">
              <h1>Our staff</h1>
            </div>
            <div className="artists">
              {about.map((a) => (
                <div className="artist" key={a.id}>
                  <div
                    className="artistimg"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                  >
                    <img src={a?.image} />
                  </div>
                  <div className="artisttext">
                    <p className="instname">
                      {a?.first_name} /{a?.last_name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-flowers">
          <div className="about-flowers-details">
            <p className="bolder">A more condensed form of learning</p>
          </div>
        </div>

        <div className="area">
          <div className="container">
            <div className="clients">
              <div className="client">
               
                <div className="client-text">
                  <h4>300+</h4>
                  <p>Students</p>
                </div>
              </div>
              <div className="client">
               
                <div className="client-text">
                  <h4>30+</h4>
                  <p>Teachers</p>
                </div>
              </div>
              <div className="client">
               
                <div className="client-text">
                  <h4>10+</h4>
                  <p>Courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="terri">
          <div className="container">
            <div className="teams">
              <div className="team">
               
                <div className="team-text">
                  <h1>Mentor support</h1>
                  <p>Support for better education</p>
                </div>
              </div>
              <div className="team">
              
                <div className="team-text">
                  <h1>Certification</h1>
                  <p>International certification</p>
                </div>
              </div>
              <div className="team">
                
                <div className="team-text">
                  <h1>Experienced teachers</h1>
                  <p>Our teachers are experienced </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutUs;

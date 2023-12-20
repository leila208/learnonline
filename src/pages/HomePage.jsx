import Slider from "../Components/Slider";
// import Rating from "../Components/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RatedBlog from "./RatedBlog";
import Faq from "react-faq-component";
import { useState, useEffect } from "react";
import { NavLink, Link, useParams } from "react-router-dom";
import Questions from "./Questions";

function Homepage() {
  let { id } = useParams();
  const data = {
    rows: [
      {
        title: "Who should take an Online Course?",
        content:
          "Students join our online courses for a variety of reasons and come from diverse backgrounds, professions, and age groups. ",
      },
      {
        title: "How do I select a course?",
        content: `Visit the course catalog to browse our offerings.`,
      },
      {
        title: "I am a high school student, can I join?",
        content:
          "Courses are open to all students 18 years or older. If you are under 18 years old, please contact us.",
      },
    ],
  };
 

  //industry ve blogs istifade etmisem

  const industry = [
    {
      id: 1,
      name: "Science",

      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNjaWVuY2UlMjBlZHVjYXRpb258ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Art",

      image:
        "https://images.unsplash.com/photo-1522167428-d603a1d62f26?q=80&w=1322&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

  
  ];

  return (
    <>
      <Slider />
      <div className="container">
        <h1 className="headingg">Programs we offer</h1>{" "}
        <div className="bloqs">
          {industry.map((a) => (
            <div className="bloq" key={a.id}>
              <div className="bloq-image">
                <img src={a.image} />
              </div>
              <div className="bloq-details">
                <p>{a.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="organic">
        <div className="organic-image">
          <i className="fa-solid fa-industry"></i>
        </div>
        <div className="organic-text">
          <p>Live,Learn,Grow</p>
        </div>
      </div>

      <RatedBlog />
      <div className="headingg">
        <h1>Our partners</h1>
      </div>
      <section className="ourPartners">
        <div className="container">
          <div className="partners">
            <div className="partner">
              <img src="https://preview.colorlib.com/theme/ezuca/images/logo-1.png" />
            </div>
            <div className="partner">
              <img src="https://preview.colorlib.com/theme/ezuca/images/logo-2.png" />
            </div>
            <div className="partner">
              <img src="https://preview.colorlib.com/theme/ezuca/images/logo-3.png" />
            </div>
            <div className="partner">
              <img src="https://preview.colorlib.com/theme/ezuca/images/logo-4.png" />
            </div>
            <div className="partner">
              <img src="https://preview.colorlib.com/theme/ezuca/images/logo-5.png" />
            </div>
          </div>
        </div>
      </section>
      <section className="Faq">
      <div className="headingg">
      <h1> Faq</h1> 
      </div>
          <div className="container">
      <div className="faq">
        <Faq data={data} />
      </div></div></section>
    </>
  );
}
export default Homepage;

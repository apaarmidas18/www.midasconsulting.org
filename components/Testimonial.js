import React from "react";
import Slider from "react-slick";

export default function Testimonial() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <>
      <Slider {...settings}>
        <div className="test-card">
          <p>
            Midas has provided excellent candidates for our team. Chad and CJ
            consistently inquire on each candidate who is interviewed to ensure
            they tailor the candidates for our team. We enjoy working with them
            and appreciate their professionalism and stellar character.
          </p>
          <h3>Jay</h3>
          <h4>Operations</h4>
        </div>
        <div className="test-card">
          <p>
            We have appreciated using Midas' online platform and have found the
            staff to be quite helpful. We were able to run reports to track the
            availability of the talent they gave us.
          </p>
          <h3>Michael</h3>
        </div>
        <div className="test-card">
          <p>
            We are everyone free to be themselves at our workplace, and we value
            each team member's uniqueness. We were able to better grasp each
            other's personalities because to Midas' soft skill evaluation.
          </p>
          <h3>Hemant</h3>
          <h4>Healthcare Leader</h4>
        </div>
      </Slider>
    </>
  );
}

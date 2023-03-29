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
      {/* <div className='button-card'>
    <button className='slick-btn-left' onClick={() => slider?.current?.slickPrev()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg></button>
</div>
<div className='button-card'>
      <button className='slick-btn-right' onClick={() => slider?.current?.slickNext()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
</div> */}
    </>
  );
}

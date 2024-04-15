import React from "react";
import Slider from "react-slick";
import './Slider.css'
function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3><img src="https://shorthand.com/the-craft/immersive-photo-essays/assets/5wTVV58HJo/pexels-photomix-company-212372-750x500.jpeg"></img></h3>
        </div>
        <div>
          <h3><img src="https://shorthand.com/the-craft/immersive-photo-essays/assets/5wTVV58HJo/pexels-photomix-company-212372-750x500.jpeg"></img></h3>
        </div>
        <div>
          <h3><img src="https://shorthand.com/the-craft/immersive-photo-essays/assets/5wTVV58HJo/pexels-photomix-company-212372-750x500.jpeg"></img></h3>
        </div>
        <div>
          <h3><img src="https://shorthand.com/the-craft/immersive-photo-essays/assets/5wTVV58HJo/pexels-photomix-company-212372-750x500.jpeg"></img></h3>
        </div>
        <div>
          <h3><img src="https://shorthand.com/the-craft/immersive-photo-essays/assets/5wTVV58HJo/pexels-photomix-company-212372-750x500.jpeg"></img></h3>
        </div>
        <div>
          <h3><img src="https://shorthand.com/the-craft/immersive-photo-essays/assets/5wTVV58HJo/pexels-photomix-company-212372-750x500.jpeg"></img></h3>
        </div>
        <div>
          <h3><img src="https://shorthand.com/the-craft/immersive-photo-essays/assets/5wTVV58HJo/pexels-photomix-company-212372-750x500.jpeg"></img></h3>
        </div>
        <div>
          <h3><img src="https://shorthand.com/the-craft/immersive-photo-essays/assets/5wTVV58HJo/pexels-photomix-company-212372-750x500.jpeg"></img></h3>
        </div>
        <div>
          <h3><img src="https://shorthand.com/the-craft/immersive-photo-essays/assets/5wTVV58HJo/pexels-photomix-company-212372-750x500.jpeg"></img></h3>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;

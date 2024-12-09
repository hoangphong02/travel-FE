import React, { useEffect } from "react";
import image1 from "~/assets/logo/image1.jpg";
import image2 from "~/assets/logo/image2.jpg";
import image3 from "~/assets/logo/image3.jpg";
import image4 from "~/assets/logo/image4.jpg";
import image5 from "~/assets/logo/image5.jpg";
import image6 from "~/assets/logo/image9.png";
import image7 from "~/assets/logo/image-tour.png";
import image8 from "~/assets/logo/image-contact.jpeg";
const PicturePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const images = document.querySelectorAll(".image-wrapper img");
      images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        if (
          rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
        ) {
          img.classList.add("flip");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="picture-page">
      <div className="picture-page-title">
        <span>Images</span>
        <div className="line">
          <span className="line-1"></span>
          <span className="line-2"></span>
        </div>
      </div>
      <div className="picture-page-body">
        <div className="list-image">
          <div className="image-wrapper">
            <img src={image1} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={image2} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={image3} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={image4} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={image5} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={image6} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={image7} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={image8} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={image1} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={image2} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={image3} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={image4} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={image5} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={image6} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={image7} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={image8} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={image1} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={image2} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={image3} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={image4} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={image5} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={image6} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={image7} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={image8} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PicturePage;

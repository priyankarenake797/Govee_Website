import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <main>
        <br />
        <br />
        <section>
          <div className="col-lg-3col-md-4 mb-3">
            <div className="containerm">
              <div className="slider-container">
                <Slider {...settings}>
                  <div>
                    <img
                      src="https://tse4.mm.bing.net/th?id=OIP.8OQCpk4VHzth5vVvt9HnCAHaE7&pid=Api&P=0&"
                      alt="Something went wrong"
                      className="image1"
                    />
                  </div>
                  <div>
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIP.hImxMjEopHqZfOHU0NYlwQHaEK&pid=Api&P=0&"
                      alt="Something went wrong"
                      className="image1"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>

        {/* 2nd section */}
        <section className="next-section">
          <h1 className="valu">What's Popular Now</h1>

          <p> </p>
        </section>

        {/* 3rd section */}
      </main>
    </>
  );
};

export default Main;

import React, { Fragment } from "react";

import Slider from "react-slick";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";

import Pic01 from "../../images/frontend/001.jpg";
import Pic02 from "../../images/frontend/002.jpg";
import Pic03 from "../../images/frontend/003.jpg";
import Pic04 from "../../images/frontend/004.jpeg";
import Pic05 from "../../images/frontend/005.png";
import Pic06 from "../../images/frontend/006.jpeg";
import Pic07 from "../../images/frontend/007.png";
import Pic08 from "../../images/frontend/008.jpg";
import Pic09 from "../../images/frontend/009.png";
import Pic10 from "../../images/frontend/010.jpg";

const Carousel = () => {
  const imageList = [
    Pic01,
    Pic02,
    Pic03,
    Pic04,
    Pic05,
    Pic06,
    Pic07,
    Pic08,
    Pic09,
    Pic10
  ];
  const sliderSetting = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    infinite: true
  };
  return (
    <div>
      <Fragment>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <Slider
              {...sliderSetting}
              style={{ width: "75%", margin: "0 auto" }}
            >
              {imageList.map((item, index) => {
                return (
                  <div key={index}>
                    <img
                      src={item}
                      style={{
                        width: "100%",
                        margin: "18px auto"
                      }}
                    />
                  </div>
                );
              })}
            </Slider>
          </GridItem>
        </GridContainer>
      </Fragment>
    </div>
  );
};
export default Carousel;

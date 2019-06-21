import React from "react";
import Slider from "react-slick";
import { device } from "../Style/breakpoints";
import styled from "styled-components";
const FourthSection = () => {
  var settings = {
    rtl: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <>
      <ScTest className="red row">
        <div className="purple col">
          <h3>کرفس در رسانه‌ها</h3>
          <Slider {...settings} className="io-slider">
            <div>
              <a href="http://www.panevesht.com/content/%DA%A9%D8%B1%D9%81%D8%B3-%DA%A9%D8%A7%D9%84%D8%B1%DB%8C-%D8%B4%D9%85%D8%A7%D8%B1">
                <img src="https://karafsapp.com/images/panevesht.png" alt="" />
              </a>
            </div>
            <div>
              <a href="http://review.izarebin.com/%D9%85%D8%B9%D8%B1%D9%81%DB%8C-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%DA%A9%D8%B1%D9%81%D8%B3.html">
                <img src="https://karafsapp.com/images/zarebin.png" alt="" />
              </a>
            </div>
            <div>
              <a href="https://webna.ir/8785/karafs-calorie-meter-app">
                <img src="https://karafsapp.com/images/webna.png" alt="" />
              </a>
            </div>
            <div>
              <a href="http://digiato.com/article/2016/10/24/%D9%85%D8%B9%D8%B1%D9%81%DB%8C-%D8%A7%D9%BE%D9%84%DB%8C%DA%A9%DB%8C%D8%B4%D9%86-%D8%A7%D9%86%D8%AF%D8%B1%D9%88%DB%8C%D8%AF-%DA%A9%D8%B1%D9%81%D8%B3/">
                <img src="https://karafsapp.com/images/digiato.png" alt="" />
              </a>
            </div>
          </Slider>
        </div>
        <div className="blue col">
          <h3>جوایز کرفس</h3>
          <div className="row awards">
            <div className="col">
              <div className="card">
                <img src="https://karafsapp.com/images/uxpa1.png" alt="" />
                <p>
                  برنده با انتخاب مردم در بخش سلامتی و تندرستی هشتمین دوره
                  جشنواره وب و موبایل ایران
                </p>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="https://karafsapp.com/images/webiran1.png" alt="" />
                <p>
                  برنده بهترین تجربه کاربری در سومین رویداد کاربردپذیری ایران
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScTest>
    </>
  );
};

export default FourthSection;
const ScTest = styled.div`
  padding: 1em;
  max-width: 100%;
  height: 300px;
  box-sizing: border-box;
  .row {
    flex-wrap: nowrap;
  }
  @media (max-width: 860px) {
    .row {
      flex-wrap: wrap;
    }
  }
  .blue {
    width: 49%;
    /* float: right; */
    height: inherit;
    .awards {
      .card {
        font-size: 0.8em;
        padding: 0 1em;
      }
      p {
        margin: 0;
      }
    }
  }
  .purple {
    width: 49%;
    height: inherit;
    /* float: left; */
    .io-slider {
      margin: 3.7em auto;
    }
  }
  @media ${device.mobileL} {
    display: none;
  }
`;

import React from "react";
import Slider from "react-slick";
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
      {/* <ScFourthSection className=" fourth-section">
        <div className=" media">
          <h3>کرفس در رسانه‌ها</h3>
          <div className="ab">
            <Slider {...settings}>
              <div>
                <img src="https://karafsapp.com/images/panevesht.png" alt="" />
              </div>
              <div>
                <img src="https://karafsapp.com/images/zarebin.png" alt="" />
              </div>
              <div>
                <img src="https://karafsapp.com/images/webna.png" alt="" />
              </div>
              <div>
                <img src="https://karafsapp.com/images/digiato.png" alt="" />
              </div>
            </Slider>
          </div>
        </div>
        <div className="col awards">
          <h3>جوایز کرفس</h3>
          <div className="row">
            <div className="col">
              <img src="https://karafsapp.com/images/uxpa1.png" alt="" />
              <p>
                برنده با انتخاب مردم در بخش سلامتی و تندرستی هشتمین دوره جشنواره
                وب و موبایل ایران
              </p>
            </div>
            <div className="col">
              <img src="https://karafsapp.com/images/webiran1.png" alt="" />
              <p>برنده بهترین تجربه کاربری در سومین رویداد کاربردپذیری ایران</p>
            </div>
          </div>
        </div>
      </ScFourthSection> */}
      <ScTest className="red">
        <div className="purple">
          <h3>کرفس در رسانه‌ها</h3>
          <Slider {...settings} className="io-slider">
            <div>
              <img src="https://karafsapp.com/images/panevesht.png" alt="" />
            </div>
            <div>
              <img src="https://karafsapp.com/images/zarebin.png" alt="" />
            </div>
            <div>
              <img src="https://karafsapp.com/images/webna.png" alt="" />
            </div>
            <div>
              <img src="https://karafsapp.com/images/digiato.png" alt="" />
            </div>
          </Slider>
        </div>
        <div className="blue">
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

const ScFourthSection = styled.div`
  flex-wrap: nowrap;
`;

const ScTest = styled.div`
  margin: 1.5em;
  padding: 1em;
  max-width: 100%;
  height: 300px;
  box-sizing: border-box;
  .blue {
    width: 49%;
    float: right;
    height: inherit;
    .awards {
      .card {
        font-size: 0.8em;
        margin: 0 1em;
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
    float: left;
    .io-slider {
      margin: 3.7em auto;
    }
  }
`;

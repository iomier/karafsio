import React from "react";
import styled from "styled-components";
import Button from "./Utils/Button";
import { device } from "../Style/breakpoints";

const SecondSection = () => {
  return (
    <ScSecondSection className="row second-section">
      <div className="col text">
        <h2>اپلیکیشن کرفس</h2>
        <p>
          اپلیکیشن کالری‌شمار کرفس به شما کمک می‌کند تا با کنترل کالری‌های
          دریافتی و مصرفی، در راه حفظ یا رسیدن به وزن ایده‌آل گام بردارید.کافی
          است بعد از نصب برنامه، مشخصات فردی خود را در آن وارد نمایید تا برنامه
          کالری مورد نیاز شما را محاسبه نماید.
        </p>
        <div style={{ textAlign: "center" }}>
          <Button
            as="a"
            href="https://karafsapp.com/products"
            alt="products"
            primary
            text="دریافت اپلیکیشن کرفس"
          />
        </div>
      </div>
      <div className="col image-wrapper">
        <img
          className="col"
          src="https://karafsapp.com/images/karafsMobileHomePage.png"
          alt=""
        />
      </div>
    </ScSecondSection>
  );
};

export default SecondSection;

const ScSecondSection = styled.section`
  padding: 1em;
  .col.text {
    align-self: center;
  }
  .text {
    margin: 0 auto;
    box-sizing: border-box;
  }
  .image-wrapper {
    padding: 1.5em;
    text-align: center;
  }
  @media ${device.mobileL} {
    .image-wrapper {
      img {
        width: 260px;
      }
    }
  }
`;

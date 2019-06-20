import React from "react";
import styled from "styled-components";
import Button from "./Utils/Button";

const ThirdSection = () => {
  return (
    <ScThirdSection className="row third-section">
      <div className="col image-wrapper">
        <img src="https://karafsapp.com/images/dietMobileHomePage.png" alt="" />
      </div>
      <div className="col text">
        <h2>اپلیکیشن رژیم</h2>
        <p>
          اپلیکیشن رژیم کرفس، با در نظر گرفتن عادات غذایی و مشخصات فردی، برنامه
          غذایی مناسبی جهت رسیدن به وزن ایده‌آل در اختیار شما قرار می‌دهد. برای
          این منظور برنامه را نصب نمایید و با ثبت نام، رژیم خود را دریافت کنید.
        </p>
        <div style={{ textAlign: "center" }}>
          <Button
            as="a"
            href="https://karafsapp.com/products"
            primary
            text="دریافت اپلیکیشن رژیم"
          />
        </div>
      </div>
    </ScThirdSection>
  );
};

export default ThirdSection;

const ScThirdSection = styled.section`
  margin: 1.5em;
  padding: 1em;
  .col.text {
    align-self: center;
  }
  .text {
    margin: 0 4em;
    box-sizing: border-box;
  }
  .image-wrapper {
    text-align: center;
  }
`;

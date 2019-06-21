import React from "react";
import styled from "styled-components";
import Button from "../Utils/Button";
import { device } from "../../Style/breakpoints";
const Hero = () => {
  return (
    <ScHero id="hero-template">
      <header>
        <nav>
          <ul>
            <a href="/">خانه</a>
            <a href="#">محاسبه‌ی BMI</a>
            <a href="#">سرویس</a>
            <a href="#">بلاگ</a>
          </ul>
        </nav>
      </header>
      <div className="heros">
        <div className="text-block">
          <h2>گام اول سلامتـی</h2>
          <p>
            محصـولات تیـم کرفـس را بـرای آیفـون (اپـل) و سیسـتم عامل اندروید از
            لینک زیر دریافت کنید.
          </p>
          <Button
            as="a"
            href="https://karafsapp.com/products"
            alt="دریافت برنامه‌ها"
            text="دریافت برنامه‌ها"
          />
        </div>
      </div>
      {/* <div class="divider" /> */}
    </ScHero>
  );
};

export default Hero;

const ScHero = styled.div`
  header {
    nav {
      ul {
        font-weight: 600;
        display: flex;
        justify-content: flex-end !important;
        padding-bottom: 1em;
      }
      a {
        margin: 0 3rem;
        color: #eee;
        line-height: 1.5;
        list-style-type: none;
        text-decoration: none;
        cursor: pointer;
        :hover {
          color: ${props => props.theme.secondary};
        }
      }
    }
  }
  padding: 1em;
  background: #fff url("https://karafsapp.com/images/firstSectionBanner.png")
    center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 96vh;
  .heros {
    /* display: flex;
    flex: 1;
    align-content: center;
    justify-content: center; */
    position: relative;
  }
  .text-block {
    position: absolute;
    margin: 0 auto;
    left: 0;
    padding-left: 2em;
    max-width: 40vw;
    h2 {
      color: #fff;
      font-weight: 600;
      line-height: 1em;
      font-size: 3.5em;
    }
    p {
      color: #fff;
      font-size: 1.5em;
    }
  }

  .column {
    padding: 2em 0;
    width: 35%;
    min-width: 100%;

    img {
      width: 100%;
    }
  }
  /* 
  .divider {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xMDkzLjQ4IDEzMS44NUwxNzMgOTRhNzYuODUgNzYuODUgMCAwIDEtMzYuNzktMTEuNDZMMCAwdjE0MGgxMjgwVjBsLTEzMS44MSAxMTEuNjhjLTE2LjQ3IDEzLjk2LTM1LjQ3IDIwLjk2LTU0LjcxIDIwLjE3eiIvPjwvZz48L3N2Zz4=);
    display: block;
    background-size: 100% 100px;
    bottom: 0;
    height: 100px;
    z-index: 1;
  } */
  @media ${device.mobileL} {
    background-image: none;
    background-color: ${props => props.theme.primary};
    .text-block {
      text-align: center;
      /* display: none; */
      position: relative !important;
      max-width: 100% !important;
      margin: 0 auto !important;
      padding: 1em !important;
      p {
        line-height: auto;
      }
    }
    header {
      nav {
        ul {
          justify-content: center !important;
        }
        a {
          padding: 0;
          margin: 0;
          flex: 1;
        }
      }
    }
  }
`;

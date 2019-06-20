import React from "react";
import styled from "styled-components";
import Button from "../Utils/Button";

const Hero = () => {
  return (
    <ScHero id="hero-template">
      <header id="nav">
        <nav>
          <ul>
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>
          </ul>
        </nav>
      </header>
      <div className="heros">
        <div className="test">
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
  padding: 1em;
  background: #fff url("https://karafsapp.com/images/firstSectionBanner.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  /* background: linear-gradient(
    0deg,
    rgba(80, 193, 250, 1) 0%,
    rgba(18, 88, 224, 1) 100%
  ); */
  .heros {
    /* display: flex;
    flex: 1;
    align-content: center;
    justify-content: center; */
    position: relative;
  }
  .test {
    position: absolute;
    left: 0;
    padding-left: 2em;
    width: 40%;
    margin: 0 auto;
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
    max-width: 100%;

    img {
      width: 100%;
    }
  }

  .divider {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xMDkzLjQ4IDEzMS44NUwxNzMgOTRhNzYuODUgNzYuODUgMCAwIDEtMzYuNzktMTEuNDZMMCAwdjE0MGgxMjgwVjBsLTEzMS44MSAxMTEuNjhjLTE2LjQ3IDEzLjk2LTM1LjQ3IDIwLjk2LTU0LjcxIDIwLjE3eiIvPjwvZz48L3N2Zz4=);
    display: block;
    background-size: 100% 100px;
    bottom: 0;
    height: 100px;
    z-index: 1;
  }
`;

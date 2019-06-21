import React from "react";
import styled from "styled-components";
//icons
import { Envelope } from "styled-icons/fa-solid/Envelope";
import { Telegram, InstagramAlt, Twitter } from "styled-icons/boxicons-logos";
const Footer = () => {
  return (
    <ScFooter className="row">
      <div className="col">
        <h2 className="text-center">خدمات مشتریان</h2>
        <ul>
          <li>
            <a href="https://karafsapp.com/products" alt="فروشگاه کرفس">
              فروشگاه کرفس
            </a>
          </li>
          <li>
            <a
              href="https://karafsapp.com/terms-conditions"
              alt="قوانین و مقررات"
            >
              قوانین و مقررات
            </a>
          </li>
          <li>
            <a href="https://karafsapp.com/faq" alt="پرسش‌‌های متداول">
              پرسش‌‌های متداول
            </a>
          </li>
          <li>
            <a href="https://karafsapp.com/report" alt="ثبت شکایات">
              ثبت شکایات
            </a>
          </li>
          <li>
            <a href="https://karafsapp.com/about-us" alt="درباره ما">
              درباره ما
            </a>
          </li>
        </ul>
      </div>
      <div className="col">
        <h2 className="text-center">تماس با ما</h2>
        <div
          className="email-wrapper"
          style={{
            textAlign: "left",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end"
          }}
        >
          <h4 style={{ margin: "0" }}>info@karafsapp.com</h4>
          <ScEnvelope title="info@karafsapp.com" size="32" />
        </div>

        <p>
          تهران، ونک- خیابان برزیل- خیابان شمس لاهیجانی- کوچه دوازدهم- پلاک ۸
        </p>
      </div>
      <div className="col text-center">
        <h2 className="">ما را در شبکه‌های مجازی دنبال کنید</h2>
        <a href="https://telegram.me/karafsapp">
          <ScTelegram size="48" />
        </a>
        <a href="https://www.instagram.com/karafs.app">
          <ScInstagram size="48" />
        </a>
        <a href="https://twitter.com/karafsapp">
          <ScTwitter size="48" />
        </a>
      </div>
    </ScFooter>
  );
};

export default Footer;
const ScFooter = styled.div`
  background-color: #222;
  .col {
    padding: 1em;
    a,
    li {
      color: #6b6b6b;
      line-height: 1.5;
      list-style-type: none;
      text-decoration: none;
    }
  }
`;
const ScEnvelope = styled(Envelope)`
  color: #6b6b6b;
  padding: 0 0.5em;
`;
const ScTelegram = styled(Telegram)`
  color: ${props => props.theme.gray1};
  :hover {
    color: #0088cc;
  }
`;
const ScInstagram = styled(InstagramAlt)`
  color: ${props => props.theme.gray1};
  :hover {
    color: #fcaf45;
  }
`;
const ScTwitter = styled(Twitter)`
  color: ${props => props.theme.gray1};
  :hover {
    color: #1da1f2;
  }
`;

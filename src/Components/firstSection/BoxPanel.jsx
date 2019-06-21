import React from "react";
import styled from "styled-components";
import { Cloudscale } from "styled-icons/fa-brands/Cloudscale";
import { device } from "../../Style/breakpoints";
import { Users, Hamburger, Clock } from "styled-icons/fa-solid";
const BoxPanel = () => {
  return (
    <ScBox>
      <div className="row">
        <div className="col text" style={{ order: 1 }}>
          <h1>جالب است بدانید که</h1>
          <p>
            در علم تغذیه یکی از آسان‌ترین و موثرترین روشهای لاغری، استفاده از
            روش کالری‌شماری است. ما در کرفس به وسیله‌ٔ مجموعه‌ای بزرگ از غذاهای
            ایرانی و خارجی به شما کمک می‌کنیم به راحتی کالری‌های وعده‌های
            غذایی‌تان را کنترل کنید و بدون عوارض جانبی به وزن دلخواه‌تان برسید.
          </p>
        </div>
        <div className="col box-wrapper ">
          <div className="row tiles ">
            <div style={{ backgroundColor: "#eee" }} className="col box">
              <ScCloudscale size="48" />
              <h4>۷٬۲۳۱٬۷۱۸</h4>
              <p> ‌کیلوگرم با ما وزن کم کرده‌اند.</p>
            </div>
            <div className="col box">
              <ScUsers size="48" />
              <h4>۱٬۶۰۱٬۶۱۲</h4>
              <p>نفر در سرویس‌های ما ثبت‌نام کرده‌اند.‌</p>
            </div>
          </div>
          <div className="row tiles">
            <div className="col box">
              <ScClock size="48" />

              <h4>۲۶۲٬۱۹۴٬۳۱۲</h4>
              <p> دقیقه با ما ورزش کرده‌اند.‌</p>
            </div>
            <div style={{ backgroundColor: "#eee" }} className="col box">
              <ScHamburger size="48" />
              <h4>۱۱۰٬۵۴۶٬۳۴۸</h4>
              <p>غذا در سرویس‌های ما ثبت شده است.‌</p>
            </div>
          </div>
        </div>
      </div>
    </ScBox>
  );
};

export default BoxPanel;

const ScBox = styled.section`
  padding: 1.5em;

  .text {
    margin: 0 auto;
    box-sizing: border-box;
  }
  .box {
    padding: 1em;
    h4 {
      margin-bottom: 0;
    }
    p {
      margin: 0;
    }
  }
  .box-wrapper {
    align-content: stretch;
    margin: 0 4em;
  }
  @media ${device.mobileL} {
    display: none;
  }
`;

const ScCloudscale = styled(Cloudscale)`
  color: ${props => props.theme.primary};
`;
const ScUsers = styled(Users)`
  color: ${props => props.theme.primary};
`;
const ScHamburger = styled(Hamburger)`
  color: ${props => props.theme.primary};
`;
const ScClock = styled(Clock)`
  color: ${props => props.theme.primary};
`;

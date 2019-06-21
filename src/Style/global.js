import { createGlobalStyle } from "styled-components";
import "./fonts.css";
const GlobalStyle = createGlobalStyle`
body {
    font-family: EstedadMedium;
    margin:0 !important;
    direction: rtl;
}
p {
    line-height: 2.5;
    text-align: justify;
}
p, h1, h2,h3,h4,h5 {
  color:#6B6B6B;
}
.row {
    display: flex;
    flex-wrap: wrap;
  }
.col {
    flex: 1;
  }
  .text-center {
    text-align:center !important;
    
  }
`;

export default GlobalStyle;

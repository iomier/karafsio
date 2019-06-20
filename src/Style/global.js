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
.row {
    display: flex;
  }
.col {
    flex: 1;
  }
`;

export default GlobalStyle;

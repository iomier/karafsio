import React from "react";
import styled from "styled-components";

const Button = ({ primary, as, text, href, alt }) => {
  return (
    <>
      {
        /* {as === "button" ? (
        <ScButton>{text}</ScButton>
      ) : as === "a" ? (
        <ScButtonA href={href} alt={alt}>
          {text}
        </ScButtonA>
      ) : (
        "error"
      )} */
        <ScButton primary={primary} href={href} alt={alt} as={as}>
          {text}
        </ScButton>
      }
    </>
  );
};

export default Button;

const ScButton = styled.button`
  color: #fff;
  border-width: 0px;
  border-radius: 150px;
  letter-spacing: 1px;
  font-size: 14px;
  text-transform: uppercase;
  background-color: ${props =>
    props.primary ? props.theme.primary : props.theme.secondary};
  padding: 16px 40px;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  :hover {
    box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.16),
      0 2px 5px 0 rgba(0, 0, 0, 0.26);
    background: ${props => (props.primary ? "#f0f0f0" : null)};
    color: ${props => (props.primary ? props.theme.primary : null)};
  }
`;

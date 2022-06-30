import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

interface AuthBtnProps {
  icon: boolean;
  children: React.ReactNode;
}
interface AuthBtnStyle {
  icon: boolean;
}

function AuthBtn({ icon, children }: AuthBtnProps) {
  return <Button icon={icon}>{children}</Button>;
}

const Button = styled.button<AuthBtnStyle>`
  display: block;
  position: relative;
  width: 100%;
  padding: 18px 116px;
  border-radius: 6px;
  background-color: #fee500;
  font-size: 20px;
  font-weight: bold;
  ${({ icon }) =>
    icon &&
    css`
      &::before {
        display: block;
        position: absolute;
        left: 19px;
        content: "";
        width: 26px;
        height: 24px;
        background-image: url(/images/kakaoIcon.png);
        background-size: 100%;
        background-repeat: no-repeat;
      }
    `}
`;
export default AuthBtn;

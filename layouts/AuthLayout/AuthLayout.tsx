import styled from "@emotion/styled";
import React from "react";

interface AuthLayoutProps {
  children?: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <OuterContainer>
      <Container>{children}</Container>
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  padding: 6.25rem 0;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
  @media (min-width: 1280px) {
    padding: 10rem 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 32rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  background-color: #ffffff;

  border-radius: 1rem;
  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;

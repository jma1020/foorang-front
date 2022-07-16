import React from "react";
import Link from "next/link";
import Router from "next/router";
import styled from "@emotion/styled";

function ContentsHead({
  inPage,
  title,
  subtitle,
  link,
}: {
  inPage: boolean;
  title: string;
  subtitle: string;
  link: string;
}) {
  return (
    <Wrap inPage={inPage}>
      {inPage ? (
        <Img
          src="/icons/arrowL_1_color.svg"
          alt="이동"
          inPage={inPage}
          onClick={() => Router.back()}
        />
      ) : null}
      <Text>
        <Title inPage={inPage}>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Text>
      {inPage ? null : (
        <Link href={link}>
          <Img src="/icons/arrowR_1_fill.svg" alt="이동" inPage={inPage} />
        </Link>
      )}
    </Wrap>
  );
}

const Wrap = styled.section<{ inPage: boolean }>`
  display: flex;
  flex-direction: ${(prop) => (prop.inPage ? "column" : "row")};
  padding: 96px 24px 0 24px;
  justify-content: space-between;
  gap: ${(prop) => (prop.inPage ? "36px" : 0)};
`;
const Text = styled.div``;
const Title = styled.h2<{ inPage: boolean }>`
  font-weight: 600;
  font-size: ${(prop) => (prop.inPage ? "25px" : "23px")};
  line-height: 30px;
  white-space: pre-line;
`;
const SubTitle = styled.h3`
  margin: 4px 0;
  color: #8a8a8a;
`;
const Img = styled.img<{ inPage: boolean }>`
  cursor: pointer;
  margin: ${(prop) => (prop.inPage ? "-10px" : 0)};
  width: 36px;
  opacity: ${(prop) => (prop.inPage ? 1 : 0.3)};
`;

export default ContentsHead;

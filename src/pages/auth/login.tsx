import styled from "@emotion/styled";
import { NextPage } from "next";
import Image from "next/image";
import AuthBtn from "src/components/auth/AuthBtn";
import AuthLayout from "../../../layouts/AuthLayout/AuthLayout";

const LoginPage: NextPage = () => {
  return (
    <AuthLayout>
      <LoginSection>
        <div>
          <TitleFlex>
            <Title>푸드트럭 </Title>
            <Title>어디까지 </Title>
            <Title>먹어봤니?</Title>
          </TitleFlex>
          <Summary>지금 내 주변 푸드트럭을 찾아봐요!</Summary>
          {/* <LoginImgBox> */}
          <Image
            src="/images/LoginImg.png"
            alt="로그인 이미지"
            width="92px"
            height="68px"
          />
          {/* </LoginImgBox> */}
          <Hr />
          <AuthBtn icon>
            <p>카카오 로그인</p>
          </AuthBtn>
        </div>
      </LoginSection>
    </AuthLayout>
  );
};

const LoginSection = styled.section`
  text-align: right;
`;

const TitleFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
`;

const Summary = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 7.5rem;
`;

const LoginImgBox = styled.div`
  position: relative;
  width: 92px;
  height: 68px;
  display: flex;
  justify-content: flex-end;
`;

const Hr = styled.hr`
  border: 1px solid #f25835;
  margin-bottom: 200px;
`;

export default LoginPage;

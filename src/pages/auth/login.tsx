import styled from "@emotion/styled";
import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AuthBtn from "src/components/auth/AuthBtn";
import AuthLayout from "../../../layouts/AuthLayout/AuthLayout";

const LoginPage: NextPage = () => {
  const getKakaoTokenHandler = async (code: string) => {
    const data: any = {
      grant_type: "authorization_code",
      client_id: "cc6ec2dfa54d34910dfd13c1a55c8d46",
      redirect_uri: "http://localhost:3000/auth/login",
      code: code,
    };
    const queryString = Object.keys(data)
      .map(
        (k: any) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]),
      )
      .join("&");

    //토큰 발급 REST API
    axios
      .post("https://kauth.kakao.com/oauth/token", queryString, {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
      .then((res) => {
        //서버에 토큰 전송
        console.log(res);
      });
  };

  useEffect(() => {
    const param = window.history.state.as.split("?")[1];
    const query = {
      code: param?.split("=")[1],
    };
    console.log(query.code);

    // const data = {
    //   grant_type: "authorization_code",
    //   client_id: "cc6ec2dfa54d34910dfd13c1a55c8d46",
    //   redirect_uri: "https://www.naver.com/",
    //   code: query.code,
    // };
    if (query.code) {
      getKakaoTokenHandler(query.code.toString());
    }
  }, []);

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
          <Link
            href={
              "https://kauth.kakao.com/oauth/authorize?client_id=cc6ec2dfa54d34910dfd13c1a55c8d46&redirect_uri=http://localhost:3000/auth/login&response_type=code"
            }
          >
            <a>
              <div>
                <AuthBtn icon>
                  <p>카카오 로그인</p>
                </AuthBtn>
              </div>
            </a>
          </Link>
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

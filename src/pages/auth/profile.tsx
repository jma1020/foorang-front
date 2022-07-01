import React, { useState } from "react";
import styled from "@emotion/styled";
import { NextPage } from "next";
import AuthLayout from "../../../layouts/AuthLayout/AuthLayout";
import AuthBtn from "src/components/auth/AuthBtn";
import { useForm } from "react-hook-form";

interface ProfileImgStyle {
  img: any;
}

const ProfilePage: NextPage = () => {
  const [mainImg, setMainImg] = useState<string | undefined>("");

  const uploadToClient = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      console.log("이거는 i", i);
      setMainImg(URL.createObjectURL(i));
    }
  };
  console.log(mainImg);
  return (
    <AuthLayout>
      <Title>푸드트럭 찾을 준비가 거의 다 되었어요!</Title>
      <Box>
        <ProfileImg htmlFor="img" img={mainImg} />
        <ImageInput type="file" id="img" onChange={uploadToClient} />
      </Box>
      <NickNameInput placeholder="닉네임을 입력해주세요"></NickNameInput>
      <AuthBtn>프로필 설정 완료</AuthBtn>
    </AuthLayout>
  );
};

const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 60px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const ProfileImg = styled.label<ProfileImgStyle>`
  display: inline-block;
  padding: 70px 70px;
  background-image: url(${(props) => props.img});
  background-size: 100% 100%;
  position: relative;
  background-color: #eee;
  &::after {
    display: block;
    content: "";
    background: ${(props) =>
      props.img ? null : "url(/images/img-button.png) no-repeat"};
    background-size: 50px, 50px;
    width: 50px;
    height: 50px;
    /* border-radius: 40px; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ImageInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;

const NickNameInput = styled.input`
  width: 100%;
  padding: 10px 10px;
  border: 1px solid #f6510b;
  border-radius: 6px;
  margin-bottom: 200px;
`;

export default ProfilePage;

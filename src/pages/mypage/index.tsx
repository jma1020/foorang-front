import styled from "@emotion/styled";
import type { NextPage } from "next";
import Navigator from "../../components/Navigator";
import SettingIcon from "public/images/settingIcon.svg";
import { useState } from "react";
import BookMark from "src/components/myPage/BookMarkContainer";
import Review from "src/components/myPage/ReviewContainer";

const Mypage: NextPage = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <SettingContainer>
        <SettingIcon />
      </SettingContainer>
      <TopContainer>
        <Title>내 정보</Title>
        <ProfileContainer>
          <ProfileImg img="https://i.pinimg.com/236x/e2/b7/da/e2b7da6bc749ba2d7ebdfda28fac6009.jpg" />
          <ProfileNickName>jma1020</ProfileNickName>
        </ProfileContainer>
      </TopContainer>
      <TapContainer>
        <TapBookMark>북마크</TapBookMark>
        <TapReview>리뷰</TapReview>
      </TapContainer>
      {toggle ? <BookMark /> : <Review />}
      <Navigator />
    </div>
  );
};

interface StyledImgProps {
  img: string;
}

const Section = styled.section``;

const SettingContainer = styled.div`
  display: flex;
  justify-content: right;
  margin: 22px;
`;

const TopContainer = styled.div`
  margin: 0px 1.375rem 2.5rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1.75rem;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  &::after {
    content: "화살";
    position: absolute;
    right: 0;
  }
`;
// 아이콘은 여기서 after 요소로
const ProfileImg = styled.div<StyledImgProps>`
  width: 5rem;
  height: 5rem;
  background-image: url(${(props) => props.img});
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 0.375rem;
  margin-right: 1.25rem;
`;

const ProfileNickName = styled.p`
  font-weight: 600;
`;

const TapContainer = styled.div`
  display: flex;
  color: rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const TapBookMark = styled.div`
  flex-grow: 1;
  border-bottom: 2px solid #f7510b;
  padding-bottom: 0.75rem;
`;

const TapReview = styled.div`
  flex-grow: 1;
  border-bottom: 2px solid #f7510b;
  padding-bottom: 0.75rem;
`;

export default Mypage;

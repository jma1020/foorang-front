import styled from "@emotion/styled";
import type { NextPage } from "next";
import Navigator from "../../components/Navigator";
import SettingIcon from "public/images/settingIcon.svg";
import { useState } from "react";

const Mypage: NextPage = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <SettingContainer>
        <SettingIcon />
      </SettingContainer>
      <Title>내 정보</Title>
      <ProfileContainer>
        <ProfileImg />
        <ProfileNickName>jma1020</ProfileNickName>
      </ProfileContainer>
      <TapContainer>
        <TapBookMark>북마크</TapBookMark>
        <TapReview>리뷰</TapReview>
      </TapContainer>
      {toggle ? (
        <BookMarkContainer>
          <BookMarkImg />
          <BookMarkStoreName>카페 허니비</BookMarkStoreName>
          <BookMarkCategory>디저트 음료</BookMarkCategory>
          <BookMarkStarBox />
          <BookMarkDescription>달콤한 허니비 한잔 어때요?</BookMarkDescription>
        </BookMarkContainer>
      ) : (
        <ReviewContainer></ReviewContainer>
      )}
      <Navigator />
    </div>
  );
};

const Section = styled.section``;

const SettingContainer = styled.div`
  display: flex;
  justify-content: right;
  margin: 22px;
`;

const Title = styled.h2``;

const ProfileContainer = styled.div``;
// 아이콘은 여기서 after 요소로
const ProfileImg = styled.div``;

const ProfileNickName = styled.p``;

const TapContainer = styled.div``;

const TapBookMark = styled.div``;

const TapReview = styled.div``;

const BookMarkContainer = styled.div``;

const BookMarkImg = styled.div``;

const BookMarkStoreName = styled.h3``;

const BookMarkCategory = styled.em``;

const BookMarkStarBox = styled.div``;

const BookMarkDescription = styled.p``;

const ReviewContainer = styled.div``;

const ReviewStoreName = styled.h3``;

const ReviewCategory = styled.em``;

const ReviewStarBox = styled.div``;

const ReviewImg = styled.div``;

const ReviewTitle = styled.h3``;

const ReviewDescription = styled.p``;

export default Mypage;

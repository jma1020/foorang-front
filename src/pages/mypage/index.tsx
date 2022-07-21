import styled from "@emotion/styled";
import type { NextPage } from "next";
import Navigator from "../../components/Navigator";
import SettingIcon from "public/images/settingIcon.svg";
import { useState } from "react";
import BookMark from "src/components/myPage/BookMarkContainer";
import Review from "src/components/myPage/ReviewContainer";
import { css } from "@emotion/react";
import RightArrowSVG from "src/components/myPage/RightArrowSVG";

const Mypage: NextPage = () => {
  const [bookMarkToggle, setbookMarkToggle] = useState(true);
  const [reviewToggle, setreviewToggle] = useState(false);

  const onBookMark = () => {
    setbookMarkToggle(true);
    setreviewToggle(false);
  };

  const onReview = () => {
    setbookMarkToggle(false);
    setreviewToggle(true);
  };

  return (
    <Section>
      <SettingContainer>
        <SettingIcon />
      </SettingContainer>
      <TopContainer>
        <Title>내 정보</Title>
        <ProfileContainer>
          <ProfileImg img="https://i.pinimg.com/236x/e2/b7/da/e2b7da6bc749ba2d7ebdfda28fac6009.jpg" />
          <ProfileNickName>jma1020</ProfileNickName>
          <RightArrowSVG colorScheme="gray" />
        </ProfileContainer>
      </TopContainer>
      <TapContainer>
        <TapBookMark onClick={onBookMark} active={bookMarkToggle}>
          북마크
        </TapBookMark>
        <TapReview onClick={onReview} active={reviewToggle}>
          리뷰
        </TapReview>
      </TapContainer>
      {bookMarkToggle && <BookMark />}
      {reviewToggle && <Review />}
      <Navigator />
    </Section>
  );
};

interface StyledImgProps {
  img: string;
}

interface activeProps {
  active: boolean;
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
  cursor: pointer;
`;

const TapBookMark = styled.div<activeProps>`
  flex-grow: 1;
  box-sizing: border-box;
  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid #f7510b;
      color: #f7510b;
    `}
  padding-bottom: 0.75rem;
`;

const TapReview = styled.div<activeProps>`
  flex-grow: 1;
  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid #f7510b;
      color: #f7510b;
    `}
  padding-bottom: 0.75rem;
`;

export default Mypage;

import styled from "@emotion/styled";
import type { NextPage } from "next";
import Navigator from "../../components/Navigator";
import SettingIcon from "public/images/settingIcon.svg";
import { useState } from "react";

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
      {toggle ? (
        <BookMarkContainer>
          <BookMarkImg img="https://previews.123rf.com/images/kaisorn/kaisorn1509/kaisorn150900001/44704238-%EC%A4%91%EA%B5%AD-%EC%9D%8C%EC%8B%9D%EC%9D%98-%EC%84%B8%ED%8A%B8.jpg" />
          <BookMarkTextContainer>
            <BookMarkStoreName>카페 허니비</BookMarkStoreName>
            <BookMarkCategory>디저트 음료</BookMarkCategory>
            <BookMarkStarBox />
            <BookMarkDescription>
              달콤한 허니비 한잔 어때요?
            </BookMarkDescription>
          </BookMarkTextContainer>
        </BookMarkContainer>
      ) : (
        <ReviewContainer>
          <ReviewStoreName>카페 허니비</ReviewStoreName>
          <ReviewCategory>디저트 음료</ReviewCategory>
          <ReviewStarBox>임시 별</ReviewStarBox>
          <ReviewImgContainer>
            <ReviewImg img="https://previews.123rf.com/images/kaisorn/kaisorn1509/kaisorn150900001/44704238-%EC%A4%91%EA%B5%AD-%EC%9D%8C%EC%8B%9D%EC%9D%98-%EC%84%B8%ED%8A%B8.jpg" />
            <ReviewImg img="https://previews.123rf.com/images/kaisorn/kaisorn1509/kaisorn150900001/44704238-%EC%A4%91%EA%B5%AD-%EC%9D%8C%EC%8B%9D%EC%9D%98-%EC%84%B8%ED%8A%B8.jpg" />
            <ReviewImg img="https://previews.123rf.com/images/kaisorn/kaisorn1509/kaisorn150900001/44704238-%EC%A4%91%EA%B5%AD-%EC%9D%8C%EC%8B%9D%EC%9D%98-%EC%84%B8%ED%8A%B8.jpg" />
          </ReviewImgContainer>
          <ReviewTitle>최근 먹어본 디저트 중 최고</ReviewTitle>
          <ReviewDescription>
            복숭아 무화과 아이스크림 베이스에 리치크림을 더한 시즌 크로플 최근
            먹어본 디저트 중 최고 최근 먹어본 디저트 중 최고 최근 먹어본 디저트
            중 최고 최근 먹어본 디저트 중 최고
          </ReviewDescription>
        </ReviewContainer>
      )}
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

const BookMarkContainer = styled.div`
  display: flex;
  padding: 2.125rem 1.375rem;
  position: relative;
  &::after {
    content: "화살";
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-2.125rem, 2.375rem);
  }
`;

const BookMarkImg = styled.div<StyledImgProps>`
  width: 6.375rem;
  height: 6.375rem;
  background-image: url(${(props) => props.img});
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 0.375rem;
  margin-right: 1.5rem;
`;

const BookMarkTextContainer = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr;
`;

const BookMarkStoreName = styled.h3`
  font-size: 1.125rem;
  font-weight: bold;
`;

const BookMarkCategory = styled.em`
  font-size: 0.625rem;
  color: #969696;
`;

const BookMarkStarBox = styled.div``;

const BookMarkDescription = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  color: #464646;

  align-self: flex-end;
`;

const ReviewContainer = styled.div`
  padding: 1.375rem;
`;

const ReviewStoreName = styled.h3`
  font-size: 1rem;
  font-weight: bold;
`;

const ReviewCategory = styled.em`
  display: inline-block;
  font-size: 0.625rem;
  color: #969696;
  margin-bottom: 0.875rem;
`;

const ReviewStarBox = styled.div``;

const ReviewImgContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-bottom: 0.875rem;
`;

const ReviewImg = styled.div<StyledImgProps>`
  width: 6.375rem;
  height: 6.375rem;
  background-image: url(${(props) => props.img});
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 0.375rem;
`;

const ReviewTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

const ReviewDescription = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  color: #959595;
`;

export default Mypage;

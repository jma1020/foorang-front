import * as Styled from "./Review.Styled";

const ReviewPresentation = () => {
  return (
    <Styled.ReviewContainer>
      <Styled.ReviewStoreName>카페 허니비</Styled.ReviewStoreName>
      <Styled.ReviewCategory>디저트 음료</Styled.ReviewCategory>
      <Styled.ReviewStarBox>임시 별</Styled.ReviewStarBox>
      <Styled.ReviewImgContainer>
        <Styled.ReviewImg img="https://previews.123rf.com/images/kaisorn/kaisorn1509/kaisorn150900001/44704238-%EC%A4%91%EA%B5%AD-%EC%9D%8C%EC%8B%9D%EC%9D%98-%EC%84%B8%ED%8A%B8.jpg" />
        <Styled.ReviewImg img="https://previews.123rf.com/images/kaisorn/kaisorn1509/kaisorn150900001/44704238-%EC%A4%91%EA%B5%AD-%EC%9D%8C%EC%8B%9D%EC%9D%98-%EC%84%B8%ED%8A%B8.jpg" />
        <Styled.ReviewImg img="https://previews.123rf.com/images/kaisorn/kaisorn1509/kaisorn150900001/44704238-%EC%A4%91%EA%B5%AD-%EC%9D%8C%EC%8B%9D%EC%9D%98-%EC%84%B8%ED%8A%B8.jpg" />
      </Styled.ReviewImgContainer>
      <Styled.ReviewTitle>최근 먹어본 디저트 중 최고</Styled.ReviewTitle>
      <Styled.ReviewDescription>
        복숭아 무화과 아이스크림 베이스에 리치크림을 더한 시즌 크로플 최근
        먹어본 디저트 중 최고 최근 먹어본 디저트 중 최고 최근 먹어본 디저트 중
        최고 최근 먹어본 디저트 중 최고
      </Styled.ReviewDescription>
    </Styled.ReviewContainer>
  );
};

export default ReviewPresentation;

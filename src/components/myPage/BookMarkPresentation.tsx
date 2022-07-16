import * as Styled from "./BookMark.Styled";

const BookMarkPersentation = () => {
  return (
    <Styled.BookMarkContainer>
      <Styled.BookMarkImg img="https://previews.123rf.com/images/kaisorn/kaisorn1509/kaisorn150900001/44704238-%EC%A4%91%EA%B5%AD-%EC%9D%8C%EC%8B%9D%EC%9D%98-%EC%84%B8%ED%8A%B8.jpg" />
      <Styled.BookMarkTextContainer>
        <Styled.BookMarkStoreName>카페 허니비</Styled.BookMarkStoreName>
        <Styled.BookMarkCategory>디저트 음료</Styled.BookMarkCategory>
        <Styled.BookMarkStarBox />
        <Styled.BookMarkDescription>
          달콤한 허니비 한잔 어때요?
        </Styled.BookMarkDescription>
      </Styled.BookMarkTextContainer>
    </Styled.BookMarkContainer>
  );
};

export default BookMarkPersentation;

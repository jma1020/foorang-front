import styled from "@emotion/styled";

interface StyledImgProps {
  img: string;
}

export const BookMarkContainer = styled.div`
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

export const BookMarkImg = styled.div<StyledImgProps>`
  width: 6.375rem;
  height: 6.375rem;
  background-image: url(${(props) => props.img});
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 0.375rem;
  margin-right: 1.5rem;
`;

export const BookMarkTextContainer = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr;
`;

export const BookMarkStoreName = styled.h3`
  font-size: 1.125rem;
  font-weight: bold;
`;

export const BookMarkCategory = styled.em`
  font-size: 0.625rem;
  color: #969696;
`;

export const BookMarkStarBox = styled.div``;

export const BookMarkDescription = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  color: #464646;

  align-self: flex-end;
`;

import styled from "@emotion/styled";

interface StyledImgProps {
  img: string;
}

export const ReviewContainer = styled.div`
  padding: 1.375rem;
`;

export const ReviewStoreName = styled.h3`
  font-size: 1rem;
  font-weight: bold;
`;

export const ReviewCategory = styled.em`
  display: inline-block;
  font-size: 0.625rem;
  color: #969696;
  margin-bottom: 0.875rem;
`;

export const ReviewStarBox = styled.div``;

export const ReviewImgContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-bottom: 0.875rem;
`;

export const ReviewImg = styled.div<StyledImgProps>`
  width: 6.375rem;
  height: 6.375rem;
  background-image: url(${(props) => props.img});
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 0.375rem;
`;

export const ReviewTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

export const ReviewDescription = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  color: #959595;
`;

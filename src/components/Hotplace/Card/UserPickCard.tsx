import React from "react";
import styled from "@emotion/styled";
import { COLOR } from "../../../shared/constants";

function UserPickCard({
  inPage,
  food_name,
  img,
  rating,
  category,
  review_msg,
}: {
  inPage: boolean;
  food_name: string;
  img: string;
  rating: number;
  category?: string;
  review_msg?: string;
}) {
  return (
    <Wrap inPage={inPage} img={img}>
      <Name>
        {food_name}
        {inPage ? <Category>{category}</Category> : null}
      </Name>
      <Right>
        {inPage ? <Msg>{review_msg}</Msg> : null}
        <Rate>
          <Star amount={Math.floor(rating)} />
          {rating % 1 != 0 ? <StarHalf amount={1} /> : null}
          <Text>{rating.toFixed(1)}</Text>
        </Rate>
      </Right>
    </Wrap>
  );
}

const Wrap = styled.article<{ inPage: boolean; img: string }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 10px 20px;
  padding: 16px;
  height: ${(prop) => (prop.inPage ? "140px" : "106px")};
  background-image: ${(prop) => `url(${prop.img})`};
  background-size: cover;
  background-position: center;
  background-color: #666;
  border-radius: 6px;
`;
const Name = styled.h3`
  color: #fff;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;
const Category = styled.p`
  margin: 4px 0;
  color: #fff;
  font-size: 14px;
  opacity: 0.65;
`;

const Right = styled.div``;
const Msg = styled.p`
  margin: 8px 0;
  color: #fff;
  text-align: right;
  font-size: 21px;
  font-weight: 700;
  word-break: keep-all;
  white-space: pre-line;
  line-height: 23px;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  &::before {
    content: "❝";
    display: inline-block;
    margin: 0 3px 0 0;
    font-size: 14px;
    color: ${COLOR.main};
  }
  &::after {
    content: "❞";
    display: inline-block;
    margin: 0 -3px 0 3px;
    font-size: 14px;
    color: ${COLOR.main};
  }
`;
const Rate = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;
const Star = styled.span<{ amount: number }>`
  width: ${(prop) => prop.amount * 18}px;
  height: 18px;
  background-image: url("/icons/star_2_fill.svg");
  background-size: 18px;
`;
const StarHalf = styled.span<{ amount: number }>`
  width: ${(prop) => prop.amount * 18}px;
  height: 18px;
  background-image: url("/icons/star_2_half.svg");
  background-size: 18px;
`;
const Text = styled.span`
  margin: 0 0 0 5px;
`;

export default UserPickCard;

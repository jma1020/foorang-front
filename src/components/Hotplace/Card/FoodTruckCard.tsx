import React from "react";
import styled from "@emotion/styled";

function FoodTruckCard({
  inPage,
  market_name,
  img,
  market_place,
}: {
  inPage: boolean;
  market_name: string;
  img: string;
  market_place: string;
}) {
  return (
    <Wrap inPage={inPage}>
      {inPage ? (
        <Img img={img}>
          <Text inPage={true}>
            <Name>{market_name}</Name>
            <Place>{market_place}</Place>
          </Text>
        </Img>
      ) : (
        <>
          <Img img={img} />
          <Text inPage={false}>
            <Name>{market_name}</Name>
            <Place>{market_place}</Place>
          </Text>
        </>
      )}
    </Wrap>
  );
}

const Wrap = styled.article<{ inPage: boolean }>`
  position: relative;
  display: inline-block;
  margin: 10px 20px;
  width: ${(prop) => (prop.inPage ? "95%" : "186px")};
  height: 243px;
  box-shadow: ${(prop) =>
    prop.inPage ? "none" : "2px 3px 5px 3px rgba(0, 0, 0, 0.05)"};
  border-radius: 6px;
  overflow: hidden;
`;
const Img = styled.div<{ img: string }>`
  height: 186px;
  background-image: ${(prop) => `url(${prop.img})`};
  background-size: cover;
  background-position: center;
  background-color: #555;
  border-radius: 6px;
`;
const Text = styled.div<{ inPage: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: ${(prop) => (prop.inPage ? "flex-end" : "center")};
  margin: 0 16px;
  height: ${(prop) => (prop.inPage ? "90%" : "calc(243px - 186px)")};
  span {
    color: ${(prop) => (prop.inPage ? "#fff" : "none")};
  }
`;
const Name = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 23px;
`;
const Place = styled.span`
  color: #595959;
  font-size: 13px;
`;

export default FoodTruckCard;

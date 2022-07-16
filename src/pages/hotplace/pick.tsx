import React from "react";
import styled from "@emotion/styled";

import ContentsHead from "../../components/Hotplace/ContentsHead";
import Navigator from "../../components/Navigator";
import UserPickCard from "../../components/Hotplace/Card/UserPickCard";

function pick() {
  return (
    <>
      <Wrap>
        <ContentsHead
          inPage={true}
          title={`유저들의 Pick!`}
          subtitle="방문자들이 남긴 솔직한 리뷰를 만나보세요"
          link="/"
        />
        <UserPickCard
          inPage={true}
          food_name="Name"
          img="https://img.freepik.com/free-photo/assortment-of-pieces-of-cake_114579-28274.jpg?w=1800&t=st=1657948802~exp=1657949402~hmac=c0fc5fd826f25e8411f4a284c2f1c5865f5413f57f0492a1df8eb29d32c1af97"
          rating={4.5}
          category="디저트 · 음료"
          review_msg={`최근 먹어본\n디저트 중 최고`}
        />
      </Wrap>
      <Navigator />
    </>
  );
}

const Wrap = styled.main`
  padding: 0 0 120px 0;
`;

export default pick;

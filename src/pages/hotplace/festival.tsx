import React from "react";
import styled from "@emotion/styled";

import ContentsHead from "../../components/Hotplace/ContentsHead";
import Navigator from "../../components/Navigator";
import FoodTruckCard from "../../components/Hotplace/Card/FoodTruckCard";

function festival() {
  return (
    <>
      <Wrap>
        <ContentsHead
          inPage={true}
          title={`현재 가장\n핫한 축제에서 즐기는 푸드트럭`}
          subtitle="현재 주목받는 축제를 확인해볼까요?"
          link="/"
        />
        <FoodTruckCard
          inPage={true}
          market_name="밤도깨비 야시장"
          img="https://cdn.greenpostkorea.co.kr/news/photo/201803/86372_80504_3126.jpg"
          market_place="서울, 여의도"
        />
      </Wrap>
      <Navigator />
    </>
  );
}

const Wrap = styled.main`
  padding: 0 0 120px 0;
`;

export default festival;

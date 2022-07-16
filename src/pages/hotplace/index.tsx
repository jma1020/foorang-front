import styled from "@emotion/styled";
import type { NextPage } from "next";
import ContentsHead from "../../components/Hotplace/ContentsHead";
import Navigator from "../../components/Navigator";

import FoodTruckCard from "../../components/Hotplace/Card/FoodTruckCard";
import UserPickCard from "../../components/Hotplace/Card/UserPickCard";

const Hotplace: NextPage = () => {
  return (
    <>
      <Wrap>
        <ContentsHead
          inPage={false}
          title="핫한 축제에서 즐기는 푸드트럭"
          subtitle="현재 주목받는 축제를 확인해보세요"
          link="/hotplace/festival"
        />
        <TruckWrap>
          <FoodTruckCard
            inPage={false}
            market_name="밤도깨비 야시장"
            img="https://cdn.greenpostkorea.co.kr/news/photo/201803/86372_80504_3126.jpg"
            market_place="서울, 여의도"
          />
          <FoodTruckCard
            inPage={false}
            market_name="밤도깨비 야시장"
            img="https://cdn.greenpostkorea.co.kr/news/photo/201803/86372_80504_3126.jpg"
            market_place="서울, 여의도"
          />
          <FoodTruckCard
            inPage={false}
            market_name="밤도깨비 야시장"
            img="https://cdn.greenpostkorea.co.kr/news/photo/201803/86372_80504_3126.jpg"
            market_place="서울, 여의도"
          />
          <FoodTruckCard
            inPage={false}
            market_name="밤도깨비 야시장"
            img="https://cdn.greenpostkorea.co.kr/news/photo/201803/86372_80504_3126.jpg"
            market_place="서울, 여의도"
          />
        </TruckWrap>
        <ContentsHead
          inPage={false}
          title="유저들의 Pick!"
          subtitle="방문자들이 남긴 솔직한 리뷰를 만나보세요"
          link="/hotplace/pick"
        />
        <PickWrap>
          <UserPickCard
            inPage={false}
            food_name="욜로 푸드"
            img={
              "https://img.freepik.com/free-photo/cute-mini-strawberry-shortcake-on-pink_53876-106073.jpg?t=st=1657948786~exp=1657949386~hmac=8d8181e9091a1dce55cb77ce7a83e32c1b28263f9359ea4e7a0ead6f565db304&w=1380"
            }
            rating={5}
          />
          <UserPickCard
            inPage={false}
            food_name="욜로 푸드"
            img={
              "https://img.freepik.com/free-photo/cute-mini-strawberry-shortcake-on-pink_53876-106073.jpg?t=st=1657948786~exp=1657949386~hmac=8d8181e9091a1dce55cb77ce7a83e32c1b28263f9359ea4e7a0ead6f565db304&w=1380"
            }
            rating={3}
          />
          <UserPickCard
            inPage={false}
            food_name="욜로 푸드"
            img={
              "https://img.freepik.com/free-photo/cute-mini-strawberry-shortcake-on-pink_53876-106073.jpg?t=st=1657948786~exp=1657949386~hmac=8d8181e9091a1dce55cb77ce7a83e32c1b28263f9359ea4e7a0ead6f565db304&w=1380"
            }
            rating={3.5}
          />
          <UserPickCard
            inPage={false}
            food_name="욜로 푸드"
            img={
              "https://img.freepik.com/free-photo/cute-mini-strawberry-shortcake-on-pink_53876-106073.jpg?t=st=1657948786~exp=1657949386~hmac=8d8181e9091a1dce55cb77ce7a83e32c1b28263f9359ea4e7a0ead6f565db304&w=1380"
            }
            rating={4}
          />
          <UserPickCard
            inPage={false}
            food_name="욜로 푸드"
            img={
              "https://img.freepik.com/free-photo/cute-mini-strawberry-shortcake-on-pink_53876-106073.jpg?t=st=1657948786~exp=1657949386~hmac=8d8181e9091a1dce55cb77ce7a83e32c1b28263f9359ea4e7a0ead6f565db304&w=1380"
            }
            rating={4.5}
          />
        </PickWrap>
      </Wrap>
      <Navigator />
    </>
  );
};
const Wrap = styled.main`
  padding: 0 0 120px 0;
`;

const TruckWrap = styled.section`
  padding: 5px;
  height: 280px;
  overflow: auto;
  white-space: nowrap;
`;
const PickWrap = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 768px) {
    display: block;
  }
`;

export default Hotplace;

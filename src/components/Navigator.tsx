import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "@emotion/styled";
import { COLOR } from "../shared/constants";

function Navigator() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <Wrap>
      <ul id="navigator">
        <li>
          <Link href="/">
            <Item name="home" here={pathname == "/" ? true : false}>
              홈
            </Item>
          </Link>
        </li>
        <li>
          <Link href="/food">
            <Item name="food" here={pathname == "/food" ? true : false}>
              푸드
            </Item>
          </Link>
        </li>
        <li>
          <Link href="/hotplace">
            <Item name="hotplace" here={pathname == "/hotplace" ? true : false}>
              핫플
            </Item>
          </Link>
        </li>
        <li>
          <Link href="/mypage">
            <Item name="mypage" here={pathname == "/mypage" ? true : false}>
              마이페이지
            </Item>
          </Link>
        </li>
      </ul>
    </Wrap>
  );
}

const Wrap = styled.nav`
  position: fixed;
  padding: 15px 20px 25px 20px;
  width: 100%;
  height: 105px;
  background-color: #fff;
  bottom: -10px;
  border-radius: 5px;
  box-shadow: -3px -3px 4px 0px rgba(0, 0, 0, 0.1);
  ul {
    display: flex;
    gap: 0 5px;
    li {
      flex: 1;
      text-align: center;
    }
  }
`;
const Item = styled.a<{ name: string; here: boolean }>`
  display: block;
  padding: 32px 0 0 0;
  background-image: ${(prop) =>
    `url(/icons/nav_${prop.name}_${prop.here ? "color" : "line"}.svg)`};
  background-size: 28px;
  background-repeat: no-repeat;
  background-position: top center;
  color: ${(prop) => (prop.here ? COLOR.main : "none")};
  font-weight: ${(prop) => (prop.here ? "700" : "400")};
  font-size: 14px;
`;

export default Navigator;

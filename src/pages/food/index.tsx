import type { NextPage } from "next";
import styled from "@emotion/styled";

import Navigator from "../../components/Navigator";
import SelectList from "../../components/Food/SelectList";

const Food: NextPage = () => {
  return (
    <>
      <Wrap>
        <Title>어떤 음식을 찾고 계세요?</Title>
        <SelectList />
      </Wrap>
      <Navigator />
    </>
  );
};

const Wrap = styled.main`
  height: calc(100vh - 95px);
  overflow: scroll;
`;
const Title = styled.h1`
  padding: 96px 24px 0 24px;
  font-weight: 700;
  font-size: 20px;
`;

export default Food;

import type { NextPage } from "next";
import Splash from "src/components/Splash";

const Home: NextPage = () => {
  return (
    <div>
      <h1>홈 인덱스</h1>
      <Splash />
    </div>
  );
};

export default Home;

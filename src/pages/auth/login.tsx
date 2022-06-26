import styled from "@emotion/styled";
import { NextPage } from "next";
import Link from "next/link";

const LoginPage: NextPage = () => {
  //   const onsubmit = async () => {
  //     const res = await fetch("http://192.168.1.10:8000/users/signin/kakao");
  //     const data = await res.json();
  //     console.log(data);
  //   };

  return (
    <LoginSection>
      <h1>로그인 페이지</h1>
      <Link href={"http://192.168.1.10:8000/users/signin/kakao"} passHref>
        <a>로그인버튼</a>
      </Link>
      {/* <button onClick={onsubmit}>로그인버튼</button> */}
    </LoginSection>
  );
};

const LoginSection = styled.section`
  text-align: right;
`;
export default LoginPage;

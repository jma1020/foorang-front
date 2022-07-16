import styled from "@emotion/styled";
import { NextPage } from "next";
import React from "react";
import { useDispatch } from "react-redux";
import Modal from "src/shared/modal";
import { open } from "store/slice/modalSlice";

const ModalPage: NextPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>모달페이지</h1>
      <button onClick={() => dispatch(open())}>버튼 클릭 시 Modal 오픈 </button>
      <Modal>
        <h1>모달 창 on</h1>
        <Button>닫기</Button>
        <Button>열기</Button>
      </Modal>
    </>
  );
};

const Button = styled.button`
  background-color: yellow;
  padding: 10px;
  border-radius: 10px;
  margin-right: 10px;
`;

export default ModalPage;

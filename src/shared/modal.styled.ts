import styled from "@emotion/styled";
import { COLOR } from "./constants";

export const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: #555;
`;

export const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 200;
  transform: translate(-50%, -50%);
  padding: 3rem;
  background-color: white;
  border-radius: 1rem;
  min-width: 20rem;
  text-align: center;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;
`;

export const CloseBtn = styled.button`
  color: black;
  background-color: ${COLOR.white};
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  margin-right: 10px;
`;

export const SubmitBtn = styled.button`
  color: white;
  background-color: ${COLOR.main};
  padding: 10px;
  border-radius: 10px;
  margin-right: 10px;
`;

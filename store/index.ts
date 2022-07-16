import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import exampleCounterReducer from "./slice/exampleCounterSlice";
import modalReducer from "./slice/modalSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      exampleCounter: exampleCounterReducer,
      modal: modalReducer,
    },
  });

const wrapper = createWrapper(makeStore);

export default wrapper;

export type Appstore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<Appstore["getState"]>;

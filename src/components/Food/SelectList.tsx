import React, { useState } from "react";
import styled from "@emotion/styled";

import { COLOR } from "../../shared/constants";

const FoodList: { value: string; name: string; image: string }[] = [
  { value: "hamburger", name: "햄버거", image: "/icons/food/Hamburger.svg" },
  { value: "corndog", name: "핫도그", image: "/icons/food/Corndog.svg" },
  { value: "drink", name: "음료수", image: "/icons/food/Soda.svg" },
  { value: "icecream", name: "아이스크림", image: "/icons/food/Icecream.svg" },
  { value: "pizza", name: "피자", image: "/icons/food/Pizza.svg" },
  { value: "fries", name: "튀김", image: "/icons/food/Fries.svg" },
  { value: "stick", name: "꼬치", image: "/icons/food/StickMeat.svg" },
  { value: "desert", name: "디저트", image: "/icons/food/Coffee.svg" },
];

function SelectList() {
  const [selected, setSelected] = useState({
    hamburger: false,
    corndog: false,
    drink: false,
    icecream: false,
    pizza: false,
    fries: false,
    stick: false,
    desert: false,
  });
  const SelectItem = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLUListElement;
    if (target.dataset.food) {
      setSelected({
        ...selected,
        [target.dataset.food]: !selected[target.dataset.food],
      });
    }
  };

  const MoveToNext = () => {
    const keys = Object.keys(selected);
    const values = Object.values(selected);
    const result = keys.filter((el, index) => values[index] === true);
    console.log(result);
  };

  return (
    <>
      <Wrap
        onClick={SelectItem}
        show={Object.values(selected).filter((el) => true === el).length > 0}
      >
        {FoodList.map((el, index) => (
          <Item
            key={index}
            data-food={el.value}
            image={el.image}
            selected={selected[el.value]}
          >
            {el.name}
          </Item>
        ))}
      </Wrap>
      <ButtonWrap
        show={Object.values(selected).filter((el) => true === el).length > 0}
      >
        <NextButton onClick={MoveToNext}>음식을 찾아봐요!</NextButton>
      </ButtonWrap>
    </>
  );
}

const Wrap = styled.ul<{ show: boolean }>`
  display: grid;
  padding: 0 24px ${(prop) => (prop.show ? "125px" : "24px")} 24px;
  margin-top: 36px;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Item = styled.li<{ image: string; selected: boolean }>`
  cursor: pointer;
  display: flex;
  padding: 64px 0 0 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: 142px;
  background-image: url(${(prop) => prop.image});
  background-size: 44px 48px;
  background-repeat: no-repeat;
  background-position: center 36px;
  background-color: ${(prop) =>
    prop.selected ? "rgba(247, 82, 11, 0.2)" : "#fefefe"};
  color: ${COLOR.main};
  font-weight: 600;
  box-shadow: 0px 0px 8px
    ${(prop) =>
      prop.selected ? "rgba(247, 82, 11, 0.2)" : "rgba(0, 0, 0, 0.12)"};
  border-radius: 6px;
`;
const ButtonWrap = styled.section<{ show: boolean }>`
  position: fixed;
  padding: 15px 20px 25px 20px;
  width: 100%;
  height: 105px;
  background-color: #fff;
  bottom: ${(prop) => (prop.show ? "85px" : "-50%")};
  border-radius: 5px;
  box-shadow: -3px -3px 4px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
`;
const NextButton = styled.button`
  width: 100%;
  height: 56px;
  background-color: ${COLOR.main};
  color: #fff;
  font-weight: 600;
  font-size: 17px;
  border-radius: 10px;
`;

export default SelectList;

import React, { useState } from "react";
import Router from "next/router";
import styled from "@emotion/styled";
import { COLOR } from "src/shared/constants";

const RecentSearch = [
  { keyword: "브라더 또띠아" },
  { keyword: "맛있는 또띠아" },
  { keyword: "길거리 스테이크" },
  { keyword: "야시장" },
  { keyword: "여수" },
];

const Hashtag = [
  { keyword: "인스타핫플" },
  { keyword: "밤도깨비야시장" },
  { keyword: "축제" },
  { keyword: "패스트푸드" },
  { keyword: "페스티벌" },
];

const RisingKeyword = [
  { rank: 1, keyword: "하와이 장인" },
  { rank: 2, keyword: "아맛나 핫도그" },
  { rank: 3, keyword: "PAPA" },
  { rank: 4, keyword: "크레페홈아저씨" },
];

export default function Search() {
  const [keyword, setKeyword] = useState<string | undefined>();
  const getKeyword = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const target = e.target as HTMLLIElement;
    setKeyword(target.dataset.keyword);
  };
  return (
    <>
      <SearchBar>
        <button onClick={() => Router.back()}></button>
        <SearchInput
          type="text"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
      </SearchBar>
      <Section>
        <SectionTitle>최근 검색어</SectionTitle>
        <ul className="recent" onClick={(e) => getKeyword(e)}>
          {RecentSearch.map((el, idx) => (
            <li key={idx} data-keyword={el.keyword}>
              {el.keyword}
            </li>
          ))}
        </ul>
      </Section>
      <Section>
        <SectionTitle>추천 해시태그</SectionTitle>
        <ul className="hashtag" onClick={(e) => getKeyword(e)}>
          {Hashtag.map((el, idx) => (
            <li key={idx} data-keyword={el.keyword}>
              #{el.keyword}
            </li>
          ))}
        </ul>
      </Section>
      <Section>
        <SectionTitle>관심 급상승 푸드트럭</SectionTitle>
        <ul className="rising" onClick={(e) => getKeyword(e)}>
          {RisingKeyword.map((el, idx) => (
            <li key={idx} data-keyword={el.keyword}>
              <strong>{el.rank}</strong> {el.keyword}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

const SearchBar = styled.div`
  position: relative;
  display: flex;
  margin: 20px;
  padding: 15px 16px;
  height: 60px;
  background: #fefefe;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.09);
  border-radius: 8px;
  button {
    float: left;
    display: block;
    width: 30px;
    height: 30px;
    background-image: url("/icons/arrowL_1_color.svg");
  }
`;
const SearchInput = styled.input`
  flex: 1;
  padding: 0 10px;
  font-size: 18px;
  border: none;
  outline: none;
`;

const Section = styled.section`
  margin: 0 30px;
  .recent {
    margin: 15px 0 0 0;
    li {
      padding: 15px 5px;
      font-size: 18px;
      border-bottom: 1px solid ${COLOR.grey.f2};
      &:last-child {
        border: none;
      }
    }
  }
  .hashtag {
    display: flex;
    gap: 5px;
    margin: 0 -30px 0 0;
    padding: 15px 0;
    overflow: auto;
    white-space: nowrap;
    li {
      padding: 10px 18px;
      background-color: ${COLOR.main};
      color: ${COLOR.white};
      font-size: 20px;
      border-radius: 20px;
    }
  }
  .rising {
    margin: 15px 0 0 0;
    li {
      padding: 9px 0;
      font-size: 18px;
      letter-spacing: -0.5px;
      strong {
        display: inline-block;
        width: 30px;
        font-weight: 600;
      }
    }
  }
`;

const SectionTitle = styled.h3`
  margin: 30px 0 0 0;
  font-size: 20px;
  font-weight: 600;
`;

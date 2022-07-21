import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { COLOR } from "src/shared/constants";

export const SVGColorSchemeStyles = {
  primary: css`
    fill: ${COLOR.main};
  `,
  gray: css`
    fill: ${COLOR.grey.b3};
  `,
};

export type SVGColorScheme = keyof typeof SVGColorSchemeStyles;

interface PathProps {
  $colorScheme: SVGColorScheme;
}

export const SVGContainer = styled.div`
  position: absolute;
  right: 0;
  cursor: pointer;
`;
export const SVG = styled.svg``;

export const Path = styled.path<PathProps>`
  ${({ $colorScheme }) => css`
    ${SVGColorSchemeStyles[$colorScheme]}
  `}
`;

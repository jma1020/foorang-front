import { StyledComponent } from "@emotion/styled";
import * as Styled from "./RightArrowSVG.styled";

interface RightArrowSVGProps {
  colorScheme?: Styled.SVGColorScheme;
}

const RightArrowSVG = ({ colorScheme = "primary" }: RightArrowSVGProps) => {
  return (
    <Styled.SVGContainer>
      <Styled.SVG
        width="10"
        height="17"
        viewBox="0 0 10 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Styled.Path
          d="M2.36629 0.0417799C2.54681 0.0411657 2.72517 0.0810083 2.88827 0.158376C3.05137 0.235744 3.19507 0.348672 3.30879 0.488864L9.14504 7.73886C9.32277 7.95508 9.41992 8.22628 9.41992 8.50616C9.41992 8.78604 9.32277 9.05724 9.14504 9.27345L3.10337 16.5234C2.89827 16.7702 2.60355 16.9254 2.28403 16.9548C1.96452 16.9843 1.64639 16.8856 1.39962 16.6805C1.15286 16.4754 0.997684 16.1807 0.968225 15.8612C0.938767 15.5417 1.03744 15.2235 1.24254 14.9768L6.64379 8.50011L1.42379 2.02345C1.27603 1.84608 1.18217 1.6301 1.15332 1.40107C1.12447 1.17203 1.16182 0.939515 1.26097 0.731044C1.36013 0.522573 1.51692 0.346868 1.7128 0.224717C1.90869 0.102565 2.13546 0.0390828 2.36629 0.0417799Z"
          $colorScheme={colorScheme}
        />
      </Styled.SVG>
    </Styled.SVGContainer>
  );
};

export default RightArrowSVG;

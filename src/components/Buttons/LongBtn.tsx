import { FontBold } from "@style/font.style";
import styled from "styled-components";

type Props = {
  text: string;
  onClick?: () => void;
};

const LongBtn = ({ text, onClick }: Props) => {
  return (
    <Btn onClick={onClick}>
      <FontBold size="14px">{text}</FontBold>
    </Btn>
  );
};

export default LongBtn;

const Btn = styled.div`
  width: 100%;
  height: 46px;
  flex-shrink: 0;
  border-radius: 8px;
  background-color:rgb(255, 198, 65);
  color: #3D3D3D;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ff7a30; /* 호버 시 약간 진한 색 */
  }
`;

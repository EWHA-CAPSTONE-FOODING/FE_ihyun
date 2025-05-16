import arrow from "@assets/recipe/arrow.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RecipeInput = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <StyledInputBox onClick={() => name && navigate(`/recipes/new/${name}/ingredients`)}>
      <StyledInput
        placeholder="레시피명을 입력하세요"
        onChange={handleChange}
        value={name}
        onClick={(e) => e.stopPropagation()} // input 클릭 시 박스 클릭 방지
      />
      <Arrow src={arrow} alt="arrow" />
    </StyledInputBox>
  );
};

export default RecipeInput;

const StyledInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  color: #999;
  padding: 14px 18px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 12px;
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  width: 100%;
  color: #333;
  
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 12px
  

  &::placeholder {
    color: #999;
  }
`;

const Arrow = styled.img`
  width: 16px;  /* ← ✅ 작게 줄임 */
  height: 16px;
  margin-left: 8px;
  flex-shrink: 0;
`;




/* 
import arrow from "@assets/recipe/arrow.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RecipeInput = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <Box>
      <StyledInput
        placeholder="레시피명을 입력하세요"
        onChange={handleChange}
        value={name}
      />
      <Arrow
        src={arrow}
        alt="arrow"
        onClick={() => name && navigate(`/recipes/new/${name}/ingredients`)}
      />
    </Box>
  );
};

export default RecipeInput;

// ✅ Fridge 스타일 그대로 복제 적용
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f7f7f8;
  color: #999;
  padding: 14px 18px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 12px;
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  color: #333;

  &::placeholder {
    color: #999;
  }
`;

const Arrow = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 10px;
  cursor: pointer;
`;
*/




/* 
import arrow from "@assets/recipe/arrow.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RecipeInput = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <Div>
      <input
        placeholder="레시피명을 입력하세요"
        onChange={handleChange}
        value={name}
      />
      <img
        className="arrow"
        src={arrow}
        onClick={() => name && navigate(`/recipes/new/${name}/ingredients`)}
      />
    </Div>
  );
};

export default RecipeInput;

const Div = styled.div`
  width: 90%;
  height: 67px;
  margin: 0 auto;
  border-radius: 6px;
  background: var(--grey1);
  padding: 0 13px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    outline: none;
    border: none;
    background-color: var(--grey1);

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .arrow {
    width: 25px;
    margin-right: 5px;
  }
`;
*/

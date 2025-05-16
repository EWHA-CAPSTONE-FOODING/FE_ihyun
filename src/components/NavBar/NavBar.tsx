// 마지막에 <img src={save_icon} onClick={() => navigate("/recipes/save")} /> 
import styled from "styled-components";

import analysis_icon from "@assets/navbar/analysis_icon.png";
import main_icon from "@assets/navbar/main_icon.png";
import recipe_icon from "@assets/navbar/recipe_icon.png";
import save_icon from "@assets/navbar/save_icon.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const today = new Date();
  const date = `${today.toISOString().substring(0, 7)}-01`;

  const navigate = useNavigate();
  return (
    <Div>
      <div className="nav-container">
        <img src={main_icon} onClick={() => navigate("/main")} />
        <img src={recipe_icon} onClick={() => navigate("/recipes")} />
        <img src={analysis_icon} onClick={() => navigate(`/statistics/fridge`)} />
        <img src={save_icon} onClick={() => navigate("/purchase")} />  
      </div>
    </Div>
  );
};

export default NavBar;

const Div = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  max-width: 375px;
  padding: 15px;
  justify-content: center;
  box-sizing: border-box;

  
  border-radius: 20px 20px 0 0;  /* ✅ 위쪽 모서리를 둥글게 */

  /* ✅ 내부 컨테이너 (네비게이션 바 안쪽 흰색 배경 추가) */
  .nav-container {
    display: flex;
    width: 100%;
    max-width: 400px;
    background: #ffffff; /* 내부 배경 흰색 */
    border-radius: 30px;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* ✅ 그림자 추가 */
  }

  img {
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  object-fit: contain;       /* ✅ 이미지 잘리는 거 방지 */
  display: flex;
  align-items: center;
  justify-content: center;
}

`;



















/*
import styled from "styled-components";

import analysis_icon from "@assets/navbar/analysis_icon.png";
import main_icon from "@assets/navbar/main_icon.png";
import recipe_icon from "@assets/navbar/recipe_icon.png";
import save_icon from "@assets/navbar/save_icon.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const today = new Date();
  const date = `${today.toISOString().substring(0, 7)}-01`;

  const navigate = useNavigate();
  return (
    <Div>
      <div className="nav-container">
        <img src={main_icon} onClick={() => navigate("/main")} />
        <img src={recipe_icon} onClick={() => navigate("/recipes")} />
        <img src={analysis_icon} onClick={() => navigate(`/statistics/fridge`)} />
        <img src={save_icon} onClick={() => navigate("/recipes/save")} />
      </div>
    </Div>
  );
};

export default NavBar;

const Div = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  max-width: 375px;
  padding: 15px;
  justify-content: center;
  box-sizing: border-box;

  
  border-radius: 20px 20px 0 0;  


  .nav-container {
    display: flex;
    width: 100%;
    max-width: 400px;
    background: #ffffff; 
    border-radius: 30px;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
  }

  img {
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  object-fit: contain;       
  display: flex;
  align-items: center;
  justify-content: center;
}
`;




/* import styled from "styled-components";

import analysis_icon from "@assets/navbar/analysis_icon.png";
import main_icon from "@assets/navbar/main_icon.png";
import recipe_icon from "@assets/navbar/recipe_icon.png";
import save_icon from "@assets/navbar/save_icon.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const today = new Date();
  const date = `${today.toISOString().substring(0, 7)}-01`;

  const navigate = useNavigate();
  return (
    <Div>
      <img src={main_icon} onClick={() => navigate("/main")} />
      <img src={recipe_icon} onClick={() => navigate("/recipes")} />
      <img
        src={analysis_icon}
        onClick={() => navigate(`/statistics/${date}`)}
      />
      <img src={save_icon} onClick={() => navigate("/recipes/save")} />
    </Div>
  );
};

export default NavBar;

const Div = styled.div`
  position: fixed;
  bottom: 0;

  display: flex;
  width: 100%;
  max-width: 481px; //position: fixed로 인해 global style의 max-width가 적용 안됨
  padding: 10px 20px 20px 30px;
  justify-content: space-between;
  box-sizing: border-box;

  background-color: #ffffff;

  img {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
  }
`;
*/
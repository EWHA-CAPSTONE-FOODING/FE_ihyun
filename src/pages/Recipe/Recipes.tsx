

import Header from "@components/Header/Header";
import NavBar from "@components/NavBar/NavBar";
import RecipeInput from "@components/Recipe/RecipeInput";
import RecipeList from "@components/Recipe/RecipeList";
import { getRecipes } from "@services/api/recipes";
import { FontMedium } from "@style/font.style";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { TypeRecipe } from "type/recipe";
import tomatopasta from "@assets/recipe/tomatopasta.png";


const Recipes = () => {
  const [list, setList] = useState<TypeRecipe[]>();
  const requestList = () => {
    const mockRecipes: TypeRecipe[] = [
      {
        recipeId: 1,
        name: "토마토 파스타",
        image: tomatopasta,
        mainIng: "토마토",
        heart: false,

        instructions: [
          "토마토와 마늘을 볶는다.",
          "파스타면을 삶는다.",
          "소금 간을 맞춘다.",
        ],
        advantage: ["건강에 좋음", "요리하기 쉬움", "1인 가구 추천"],
 
      }
    ];
  
    setList(mockRecipes);
  };
  
  useEffect(() => {
    requestList();
  }, []);

  return (
    <Container>
      <TopWhiteSection>
        <Header isBack={false} title="p2" />

        <ContentPadding>
          <IntroBlock>
            <FontMedium size="16px">내 마음대로 만들기</FontMedium>
            <FontMedium size="12px" className="grey">
              자유롭게 재료를 선택하고 기록해보세요.
            </FontMedium>
          </IntroBlock>

      
          <RecipeInput />

          <TitleBlock>
            <FontMedium size="16px">추천 레시피</FontMedium>
          </TitleBlock>

          <RecipeListWrapper>
            {list && <RecipeList list={list} isHistory={false} />}
          </RecipeListWrapper>
        </ContentPadding>
      </TopWhiteSection>

      <NavBarWrapper>
        <NavBar />
      </NavBarWrapper>
    </Container>
  );
};

export default Recipes;

const Container = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  position: relative;
  background-color: #fdf4dc;
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

const TopWhiteSection = styled.div`
  width: 100%;
  background-color: #fdf4dc;
  padding: 20px 0 10px;
  box-sizing: border-box;
`;

const ContentPadding = styled.div`
  padding: 0 20px;
`;

const IntroBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
  margin-bottom: 12px;

  .grey {
    color: var(--grey2);
  }
`;

const TitleBlock = styled.div`
  margin-bottom: 14px;
  padding-left: 2px;
  display: flex;
  align-items: center;
`;

const RecipeListWrapper = styled.div`
  margin-bottom: 60px;
`;


const NavBarWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;




















/* 백엔드용
import ChatbotBtn from "@components/Chat/ChatbotBtn";
import Header from "@components/Header/Header";
import NavBar from "@components/NavBar/NavBar";
import RecipeInput from "@components/Recipe/RecipeInput";
import RecipeList from "@components/Recipe/RecipeList";
import { getRecipes } from "@services/api/recipes";
import { FontMedium } from "@style/font.style";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { TypeRecipe } from "type/recipe";

const Recipes = () => {
  const [list, setList] = useState<TypeRecipe[]>();
  const requestList = () => {
    getRecipes()
      .then(res => {
        setList(res.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    requestList();
  }, []);

  return (
    <Container>
      <TopWhiteSection>
        <Header isBack={false} title="p2" />

        <ContentPadding>
          <IntroBlock>
            <FontMedium size="16px">내 마음대로 만들기</FontMedium>
            <FontMedium size="12px" className="grey">
              자유롭게 재료를 선택하고 기록해보세요.
            </FontMedium>
          </IntroBlock>

      
          <RecipeInput />

          <TitleBlock>
            <FontMedium size="16px">추천 레시피</FontMedium>
          </TitleBlock>

          <RecipeListWrapper>
            {list && <RecipeList list={list} isHistory={false} />}
          </RecipeListWrapper>
        </ContentPadding>
      </TopWhiteSection>

      <ChatBtnWrapper>
        <ChatbotBtn />
      </ChatBtnWrapper>

      <NavBarWrapper>
        <NavBar />
      </NavBarWrapper>
    </Container>
  );
};

export default Recipes;

const Container = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  position: relative;
  background-color: #fdf4dc;
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

const TopWhiteSection = styled.div`
  width: 100%;
  background-color: #fdf4dc;
  padding: 20px 0 10px;
  box-sizing: border-box;
`;

const ContentPadding = styled.div`
  padding: 0 20px;
`;

const IntroBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
  margin-bottom: 12px;

  .grey {
    color: var(--grey2);
  }
`;

const TitleBlock = styled.div`
  margin-bottom: 14px;
  padding-left: 2px;
  display: flex;
  align-items: center;
`;

const RecipeListWrapper = styled.div`
  margin-bottom: 60px;
`;

const ChatBtnWrapper = styled.div`
  position: absolute;
  bottom: 90px;
  left: 20px;
`;

const NavBarWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;
















/*
import ChatbotBtn from "@components/Chat/ChatbotBtn";
import Header from "@components/Header/Header";
import NavBar from "@components/NavBar/NavBar";
import RecipeInput from "@components/Recipe/RecipeInput";
import RecipeList from "@components/Recipe/RecipeList";
import { getRecipes } from "@services/api/recipes";
import { FontMedium } from "@style/font.style";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { TypeRecipe } from "type/recipe";

const Recipes = () => {
  const [list, setList] = useState<TypeRecipe[]>();
  const requestList = () => {
    getRecipes()
      .then(res => {
        setList(res.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    requestList();
  }, []);

  return (
    <Container>
      <TopWhiteSection>
        <Header isBack={false} title="p2" />

        <ContentPadding>
          <IntroBlock>
            <FontMedium size="16px">내 마음대로 만들기</FontMedium>
            <FontMedium size="12px" className="grey">
              자유롭게 재료를 선택하고 기록해보세요.
            </FontMedium>
          </IntroBlock>

      
          <RecipeInput />

          <TitleBlock>
            <FontMedium size="16px">추천 레시피</FontMedium>
          </TitleBlock>

          <RecipeListWrapper>
            {list && <RecipeList list={list} isHistory={false} />}
          </RecipeListWrapper>
        </ContentPadding>
      </TopWhiteSection>

      <ChatBtnWrapper>
        <ChatbotBtn />
      </ChatBtnWrapper>

      <NavBarWrapper>
        <NavBar />
      </NavBarWrapper>
    </Container>
  );
};

export default Recipes;

const Container = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  position: relative;
  background-color: #fdf4dc;
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

const TopWhiteSection = styled.div`
  width: 100%;
  background-color: #fdf4dc;
  padding: 20px 0 10px;
  box-sizing: border-box;
`;

const ContentPadding = styled.div`
  padding: 0 20px;
`;

const IntroBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
  margin-bottom: 12px;

  .grey {
    color: var(--grey2);
  }
`;

const TitleBlock = styled.div`
  margin-bottom: 14px;
  padding-left: 2px;
  display: flex;
  align-items: center;
`;

const RecipeListWrapper = styled.div`
  margin-bottom: 60px;
`;

const ChatBtnWrapper = styled.div`
  position: absolute;
  bottom: 90px;
  left: 20px;
`;

const NavBarWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;
















/* 
import ChatbotBtn from "@components/Chat/ChatbotBtn";
import Header from "@components/Header/Header";
import NavBar from "@components/NavBar/NavBar";
import RecipeInput from "@components/Recipe/RecipeInput";
import RecipeList from "@components/Recipe/RecipeList";
import { getRecipes } from "@services/api/recipes";
import { FontMedium } from "@style/font.style";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { TypeRecipe } from "type/recipe";

const Recipes = () => {
  const [list, setList] = useState<TypeRecipe[]>();
  const requestList = () => {
    getRecipes()
      .then(res => {
        setList(res.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    requestList();
  }, []);

  return (
    <Div>
      <ChatbotBtn />
      <Header isBack={false} title="당신을 위한 추천 레시피" />

      <div className="text">
        <FontMedium size="16px">내 마음대로 만들기</FontMedium>
        <FontMedium size="12px" className="gray">
          자유롭게 재료를 선택하고 기록해보세요.
        </FontMedium>
      </div>

      <RecipeInput />

      <div className="text">
        <FontMedium size="16px">추천 레시피</FontMedium>
      </div>

      <div className="margin">
        {list && <RecipeList list={list} isHistory={false} />}
      </div>

      <NavBar />
    </Div>
  );
};

export default Recipes;

const Div = styled.div`
  .margin {
    margin-bottom: 60px;
  }

  .text {
    width: 90%;
    margin: 16.5px auto 13px;
    gap: 3px;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .gray {
    color: var(--grey2);
  }
`;
*/










/*
import ChatbotBtn from "@components/Chat/ChatbotBtn";
import Header from "@components/Header/Header";
import NavBar from "@components/NavBar/NavBar";
import RecipeInput from "@components/Recipe/RecipeInput";
import RecipeList from "@components/Recipe/RecipeList";
import { getRecipes } from "@services/api/recipes";
import { FontMedium } from "@style/font.style";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { TypeRecipe } from "type/recipe";

const Recipes = () => {
  const [list, setList] = useState<TypeRecipe[]>();
  const requestList = () => {
    getRecipes()
      .then(res => {
        setList(res.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    requestList();
  }, []);

  return (
    <Div>
      <ChatbotBtn />
      <Header isBack={false} title="당신을 위한 추천 레시피" />

      <div className="text">
        <FontMedium size="16px">내 마음대로 만들기</FontMedium>
        <FontMedium size="12px" className="gray">
          자유롭게 재료를 선택하고 기록해보세요.
        </FontMedium>
      </div>

      <RecipeInput />

      <div className="text">
        <FontMedium size="16px">추천 레시피</FontMedium>
      </div>

      <div className="margin">
        {list && <RecipeList list={list} isHistory={false} />}
      </div>

      <NavBar />
    </Div>
  );
};

export default Recipes;

const Div = styled.div`
  .margin {
    margin-bottom: 60px;
  }

  .text {
    width: 90%;
    margin: 16.5px auto 13px;
    gap: 3px;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .gray {
    color: var(--grey2);
  }
`;
*/
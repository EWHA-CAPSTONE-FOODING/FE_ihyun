import React from "react";
import styled from "styled-components";

type Props = {
  content: string;
};

const MyMessage = ({ content }: Props) => {
  return (
    <Container>
      <div className="wrapper">
        <div className="text">{content}</div>
      </div>
    </Container>
  );
};

export default MyMessage;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  .wrapper {
    /* 화면 비율 기준으로 말풍선 최대 너비 설정 */
    max-width: 70%;
    border-radius: 12px;
    box-sizing: border-box;
    background: #f1f1f1; /* 연한 회색 배경 */
    padding: 10px;

    /* 긴 문장도 자동 줄바꿈되도록 설정 */
    white-space: pre-wrap;
    word-break: break-word;
    overflow-wrap: break-word;
  }
`;



/*import React from "react";
import styled from "styled-components";

type Props = {
  content: string;
};

const MyMessage = ({ content }: Props) => {
  return (
    <Div>
      <div className="wrapper">
        <div className="text">{content}</div>
      </div>
    </Div>
  );
};

export default MyMessage;

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;

  .wrapper {
    max-width: 70%;
    border-radius: 12px;
    box-sizing: border-box;
    background: #e0e0d7;  // 말풍선 색
    padding: 10px;
    white-space: pre-wrap;     //줄바꿈 허용 
    word-break: break-word;    // 긴 단어도 자동 줄바꿈
  }
`;*/



/*import React from "react";
import styled from "styled-components";

type Props = {
  content: string;
};

const MyMessage = ({ content }: Props) => {
  return (
    <Div>
      <div className="wrapper">
        <div className="text">{content}</div>
      </div>
    </Div>
  );
};

export default MyMessage;

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;

  .wrapper {
    max-width: 249px;
    border-radius: 12px;
    box-sizing: border-box;
    background: var(--yellow1);
    padding: 10px;
  }
`;*/

// 레시피명 입력해서 넘어가는 화면


import styled from "styled-components";
import Item from "../Item/Item";

type Props = {
  isEditing: boolean;
  isDeletable: boolean;
  list?: any[];
  isIconEditable: boolean;
  maxAmountList?: any[];
};

const List = ({
  isEditing,
  isDeletable,
  list = [],
  isIconEditable,
  maxAmountList,
}: Props) => {
  return (
    <Div>

      {list.map((item, index) => {
        return (
          <Item
            isIconEditable={isIconEditable}
            isEditing={isEditing}
            isDeletable={isDeletable}
            item={item}
            index={index}
            initialList={list} //편집시 기본값
            maxAmount={maxAmountList && maxAmountList[index]?.amount}
          />
        );
      })}
    </Div>
  );
};

export default List;

const Div = styled.div`
  width: 100%;
  max-width: 335px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
`;





/* 백엔드용
import styled from "styled-components";
import Item from "../Item/Item";

type Props = {
  isEditing: boolean;
  isDeletable: boolean;
  list?: any[];
  isIconEditable: boolean;
  maxAmountList?: any[];
};

const List = ({
  isEditing,
  isDeletable,
  list = [],
  isIconEditable,
  maxAmountList,
}: Props) => {
  return (
    <Div>
      {list.map((item, index) => {
        return (
          <Item
            isIconEditable={isIconEditable}
            isEditing={isEditing}
            isDeletable={isDeletable}
            item={item}
            index={index}
            initialList={list} //편집시 기본값
            maxAmount={maxAmountList && maxAmountList[index]?.amount}
          />
        );
      })}
    </Div>
  );
};

export default List;

const Div = styled.div`
  width: 100%;
  max-width: 335px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
`;*/

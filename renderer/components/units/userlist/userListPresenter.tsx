import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import * as S from "./userListStyles";
import { IUserListContainerProps } from "./userListTypes";
import { v4 as uuidv4 } from "uuid";

const UserListPresenter = (props: IUserListContainerProps) => {
  return (
    <>
      <S.MainWrapper>
        <S.LoggedInUser>{props.userName}님의 유저목록</S.LoggedInUser>
        {props.list.map(
          (
            el: {
              uid: Key;
              email:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal;
            },
            idx:
              | string
              | number
              | boolean
              | ReactFragment
              | ReactPortal
              | ReactElement<any, string | JSXElementConstructor<any>>
          ) => (
            <S.UserWrapper key={el.uid} onClick={props.onClickMakeChat}>
              <S.FlexBox id={uuidv4()}>
                <S.IndexStyle>{idx}</S.IndexStyle>
                <div>{el.email}</div>
              </S.FlexBox>
            </S.UserWrapper>
          )
        )}
        <button>그룹채팅</button>
      </S.MainWrapper>
    </>
  );
};

export default UserListPresenter;

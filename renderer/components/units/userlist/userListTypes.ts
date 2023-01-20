import {
  JSXElementConstructor,
  Key,
  MouseEvent,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";

export interface IUserListContainerProps {
  list: IListProps;
  userName: string;
  onClickMakeChat: (e: MouseEvent<HTMLDivElement>) => void;
}

export interface IListProps {
  [x: string]: any;
  uid: Key;
  email:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal;
}

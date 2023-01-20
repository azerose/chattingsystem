import { collection, query } from "firebase/firestore/lite";
import { onSnapshot } from "firebase/firestore";
import { MouseEvent, useEffect, useState } from "react";
import { AuthAdmin, Store } from "../../commons/firebase/firebase";
import UserListPresenter from "./userListPresenter";
const UserListContainer = () => {
  const [list, setList] = useState<any>([]);
  const [makeChat, setMakeChat] = useState(false);
  const [groupMem, setGroupMem] = useState([]);
  const [userName, setUserName] = useState("");
  const [chatId, setChatId] = useState("");

  useEffect(() => {
    AuthAdmin.listUsers()
      .then((res) => {
        setList(res.users.map((user: any) => user.toJSON()));
      })
      .catch(() => {});
    const q = query(collection(Store, String(localStorage.getItem("user"))));

    setUserName(localStorage.getItem("user"));
  }, []);

  const onClickMakeChat = (e: MouseEvent<HTMLDivElement>) => {
    const id = e.currentTarget.id;
    if (id.includes(",")) {
      const result = id.split(",");
      setGroupMem(result);
    } else {
      setChatId(id);
    }
    setMakeChat(true);
  };

  return (
    <UserListPresenter
      list={list}
      userName={userName}
      onClickMakeChat={onClickMakeChat}
    />
  );
};

export default UserListContainer;

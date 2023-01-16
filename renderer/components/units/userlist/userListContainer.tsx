import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Store } from "../../commons/firebase/firebase";
import { accessTokenState } from "../../commons/store";
import UserListPresenter from "./useListPresenter";

const UserListContainer = () => {
  const [list, setList] = useState([]);
  const [chat, setChat] = useState([]);
  const [userName, setUserName] = useState("");
  const [accessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    const userList = query(collection(Store, "userlist"));
    onSnapshot(userList, (snapshot) => {
      const result = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setList(result);
    });
    const user = query(collection(Store, accessToken));
    onSnapshot(user, (snapshot) => {
      const result = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setChat(result);
    });
    setUserName(accessToken);
  }, []);
  return <UserListPresenter />;
};

export default UserListContainer;

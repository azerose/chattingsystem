import { collection, query } from "firebase/firestore/lite";
import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { AuthAdmin, Store } from "../../commons/firebase/firebase";
import { accessTokenState } from "../../commons/store";
import UserListPresenter from "./useListPresenter";

const UserListContainer = () => {
  const [list, setList] = useState<any>([]);
  const [chat, setChat] = useState([]);
  const [userName, setUserName] = useState("");
  const [accessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    const userList = AuthAdmin.listUsers()
      .then((res) => {
        setList(res.users.map((user: any) => user.toJSON().email));
      })
      .catch(() => {});

    // const user = query(collection(Store, accessToken));
    // onSnapshot(user, (snapshot) => {
    //   const result = snapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     ...doc.data(),
    //   }));
    //   setChat(result);
    // });
    setUserName(accessToken);
  }, []);
  console.log(list);

  return <UserListPresenter />;
};

export default UserListContainer;

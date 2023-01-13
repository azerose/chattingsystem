import { useRouter } from "next/router";

const useMoveToPage = () => {
  const router = useRouter();
  const onClickMoveToPage = (path: string) => () => {
    void router.push(path);
  };
  const onClickMoveBack = () => {
    void router.back();
  };
  return {
    onClickMoveToPage,
    onClickMoveBack,
  };
};

export default useMoveToPage;

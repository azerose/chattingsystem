import { useRouter } from "next/router";

const useMoveToPage = () => {
  const router = useRouter();
  const onClickMoveToPage = (path: string) => () => {
    void router.push(path);
  };

  return {
    onClickMoveToPage,
  };
};

export default useMoveToPage;

import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const FireWorkEffect = () => {
  const { width, height } = useWindowSize();
  return <Confetti width={`${width * 0.9}`} height={`${height * 0.8}`} />;
};
export default FireWorkEffect;

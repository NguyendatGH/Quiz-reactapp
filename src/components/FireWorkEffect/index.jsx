
import { useWindowSize } from 'react-use';
import Confetti from "react-confetti";

const FireWorkEffect = () => {
  const { width, height } = useWindowSize();
  return <Confetti width={width} height={height} />;
};
export default FireWorkEffect;

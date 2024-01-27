import PhaseOne from "./PhaseOne";
import PhaseTwo from "./PhaseTwo";
import { useRecoilValue } from "recoil";
import PhaseChangeState from "../Atom/PhaseChangeState";
import PhaseThree from "./PhaseThree";
//import { useSetRecoilState } from "recoil";

const CreateQuiz = () => {
  //const setPhase = useSetRecoilState(PhaseChangeState);
  const phase = useRecoilValue(PhaseChangeState);

  const renderQuizPhase = () => {
    switch (phase) {
      case "phase1":
        return <PhaseOne />;
      case "phase2":
        return <PhaseTwo />;
      case "phase3":
        return <PhaseThree />;
      default:
        return null;
    }
  };

  return <div>{renderQuizPhase()}</div>;
};

export default CreateQuiz;

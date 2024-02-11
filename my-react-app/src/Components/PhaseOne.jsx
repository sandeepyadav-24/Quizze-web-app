import { useState } from "react";
import { useSetRecoilState } from "recoil";
import PhaseChangeState from "../Atom/PhaseChangeState";
import QuizName from "../Atom/QuizName";
const PhaseOne = () => {
  const setPhaseValue = useSetRecoilState(PhaseChangeState);
  const setQuizNameAtom = useSetRecoilState(QuizName);
  const [quizName, setQuizName] = useState("");
  const [poll, setPoll] = useState(false);
  const [qna, setQna] = useState(false);

  const btnClick = () => {
    // Change Phase As Moving Forward
    setPhaseValue("phase2");

    // Setting QuizAnem To Atom For Future Retrival
    setQuizNameAtom(quizName);
  };
  return (
    <div className="bg-[#F2F2F2] h-screen p-40">
      <div className="w-3/4">
        <input
          placeholder="Quiz name"
          onChange={(e) => setQuizName(e.target.value)}
          className=" py-3 px-44   rounded-lg"
        ></input>
        <div className="flex my-5">
          <h1 className="text-[#9BA3AF]">Quiz Type</h1>
          <button
            className={`px-10 py-2 bg-white rounded-lg mx-6 text-[#9BA3AF] ${
              qna ? "bg-[#60B84C] text-red-800" : ""
            }`}
            onClick={() => {
              qna ? setQna(false) : setQna(true);
            }}
          >
            Q & A
          </button>
          <button
            className={`px-10 py-2 bg-white rounded-lg mx-6 text-[#9BA3AF] ${
              poll ? "bg-[#60B84C] text-red-800" : ""
            }`}
            onClick={() => {
              poll ? setPoll(false) : setPoll(true);
            }}
          >
            Poll Type
          </button>
        </div>
        <div>
          <button className="px-10 py-2 bg-white rounded-lg mx-6 ">
            Cancel
          </button>
          <button
            className="px-10 py-2 bg-white rounded-lg mx-6 "
            onClick={btnClick}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
export default PhaseOne;

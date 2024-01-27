import { useSetRecoilState } from "recoil";
import PhaseChangeState from "../Atom/PhaseChangeState";
import { useState } from "react";
const PollType = () => {
  const setPhaseValue = useSetRecoilState(PhaseChangeState);
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [selectedButton, setSelectedButton] = useState(null);

  const quizData = [];

  const questionNumber = (number) => {
    const currentData = {
      questionText: question,
      options: [option1, option2, option3, option4],
      correctOptionIndex: 1,
    };
    quizData.push(currentData);
    console.log(quizData);
  };

  const createButton = (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/admin/createquiz";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "poll", // Replace with your logic to determine quiz type
        questions: quizData, // Assuming quizData is an array of questions
        createdBy: "userId", // Replace with the actual user ID
        shareable: true, // Replace with your logic for shareable
        timerEnabled: false, // Replace with your logic for timerEnabled
        maxQuestions: 5, // Replace with your logic for maxQuestions
      }),
    };
    setPhaseValue("phase3");
  };
  const btnhandler = () => {
    setPhaseValue("phase1");
  };
  return (
    <div className="bg-[#F2F2F2] h-screen py-40">
      <div className="w-3/4 mx-40 ">
        <div className="option flex flex-row my-3">
          {[1, 2, 3, 4, 5].map((buttonNumber) => (
            <button
              key={buttonNumber}
              className={`bg-white rounded-full w-14 h-14 mx-2 hover:bg-green-600 ${
                selectedButton === buttonNumber ? "bg-green-600" : ""
              }`}
              onClick={() => questionNumber(buttonNumber)}
            >
              {buttonNumber}
            </button>
          ))}
        </div>
        <form>
          <input
            placeholder="Poll Question"
            className="py-2 px-44 rounded-lg my-2"
            onChange={(e) => setQuestion(e.target.value)}
          />
          <div className="flex flex-row">
            <h1>Option Type</h1>
            <input type="radio" />
            <label htmlFor="text">Text</label>
            <input type="radio" />
            <label htmlFor="image">Image URL</label>
            <input type="radio" />
            <label htmlFor="textAndImage">Text & Image URL</label>
          </div>
          <div className="flex flex-col">
            <input
              placeholder="Text"
              className="py-2 px-44 rounded-lg my-2"
              onChange={(e) => setOption1(e.target.value)}
            ></input>
            <input
              placeholder="Text"
              className="py-2 px-44 rounded-lg my-2"
              onChange={(e) => setOption2(e.target.value)}
            ></input>
            <input
              placeholder="Text"
              className="py-2 px-44 rounded-lg my-2"
              onChange={(e) => setOption3(e.target.value)}
            ></input>
            <input
              placeholder="Text"
              className="py-2 px-44 rounded-lg my-2"
              onChange={(e) => setOption4(e.target.value)}
            ></input>
          </div>
          <div>
            <button
              onClick={btnhandler}
              className="bg-white px-10 py-2 rounded-lg mx-6"
            >
              Cancel
            </button>
            <button
              className="bg-white px-10 py-2 rounded-lg mx-6"
              onClick={(e) => createButton(e)}
            >
              Create Quiz
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default PollType;

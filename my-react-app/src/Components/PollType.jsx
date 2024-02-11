import { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import PhaseChangeState from "../Atom/PhaseChangeState";
import LinkPhase from "../Atom/LinkPhase";
import UserId from "../Atom/UserId";
import QuizName from "../Atom/QuizName";
import DynamicButtonGenerator from "./DynamicButtonGenerator";

const PollType = () => {
  // Getting UserId Value From User ID Atom
  //const userId = useRecoilValue(UserId);
  //console.log("UserId:", userId);

  //useEffect(() => {
  // You can use userId here and it will be updated whenever the UserId atom changes
  //console.log("Updated UserId in PollType:", userId);
  //}, [userId]); // Subscribe to changes in userId

  // Getting NAme Of the Quiz From Atom
  const quizName = useRecoilValue(QuizName);

  // Set Phase Value Helps in Changing Page
  const setPhaseValue = useSetRecoilState(PhaseChangeState);

  const setLinkPhaseValue = useSetRecoilState(LinkPhase);

  // State Of Whole Question
  const [question, setQuestion] = useState([
    {
      questionText: "",
      options: ["", "", "", ""],
      correctOptionIndex: "",
    },
  ]);

  // State For Question State
  const [questionText, setQuestionText] = useState("");
  // State For Option 1
  const [option1, setOption1] = useState("");
  // State For Option 2
  const [option2, setOption2] = useState("");
  // State For Option 3
  const [option3, setOption3] = useState("");
  // State FOr OPtion 4
  const [option4, setOption4] = useState("");
  // State For Correct Option
  const [correctOption, setCorrectOption] = useState("");

  //const [selectedButton, setSelectedButton] = useState(null);

  // function For CreateButton Fo rPosting Quiz Data To dataBAse
  const createQuizButton = async (e) => {
    // Prevent o Refresh
    e.preventDefault();

    onDynamicClick();

    const token = localStorage.getItem("token");
    console.log(token);

    // URL For Fetching Function
    const url = "http://localhost:3000/admin/createquiz";
    // Options
    const options = {
      // Method
      method: "POST",
      // Headers
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      // BOdy Data
      body: JSON.stringify({
        quizName: quizName,
        type: "poll",
        questions: [
          question[1],
          question[2],
          question[3],
          question[4],
          question[5],
        ],

        shareable: true,
        timerEnabled: false,
        maxQuestions: 5,
      }),
    };

    // Fetch Function
    const response = await fetch(url, options);

    // Getting response From Backend ANd Parsing
    const data = await response.json();

    // Console Link To give Quiz
    console.log(data);

    // Setting The Link value To The Atom
    setLinkPhaseValue(data.mes);

    //Change Phase For Move Forward PAge
    setPhaseValue("phase3");
  };

  // Button Handler For CAncel
  const cancelButton = () => {
    // Works For moving Backward Page
    setPhaseValue("phase1");
  };

  // This BUTTON Got As function From Dynamic Button
  const onDynamicClick = () => {
    setQuestion((prev) => {
      console.log(prev);
      return [
        ...prev,
        {
          questionText: questionText,
          options: [option1, option2, option3, option4],
          correctOptionIndex: 1,
        },
      ];
    });
  };
  useEffect(() => {
    console.log(question);
  }, [question]);
  return (
    <div className="bg-[#F2F2F2] h-screen py-40">
      <div className="w-3/4 mx-40 ">
        <div className="option flex flex-row my-3">
          {/*[1, 2, 3, 4, 5].map((buttonNumber) => (
            <button
              key={buttonNumber}
              className={`bg-white rounded-full w-14 h-14 mx-2 hover:bg-green-600 ${
                selectedButton === buttonNumber ? "bg-green-600" : ""
              }`}
              onClick={() => questionNumber(buttonNumber)}
            >
              {buttonNumber}
            </button>
          ))*/}
          <DynamicButtonGenerator onButtonClick={onDynamicClick} />
        </div>
        <form>
          <input
            placeholder="Poll Question"
            className="py-2 px-44 rounded-lg my-2"
            onChange={(e) => setQuestionText(e.target.value)}
          />
          <div className="flex flex-row my-3">
            <h1 className="mx-3">Option Type</h1>
            <input type="radio" />
            <label htmlFor="text" className="mx-3">
              Text
            </label>
            <input type="radio" />
            <label htmlFor="image" className="mx-3">
              Image URL
            </label>
            <input type="radio" />
            <label htmlFor="textAndImage" className="mx-3">
              Text & Image URL
            </label>
          </div>
          <div className="flex flex-col">
            <div>
              <input
                type="radio"
                className="mx-5"
                name="option"
                onClick={setCorrectOption(1)}
              ></input>
              <input
                placeholder="Text"
                className="py-2 px-44 rounded-lg my-2"
                onChange={(e) => setOption1(e.target.value)}
              ></input>
            </div>
            <div>
              <input
                type="radio"
                className="mx-5"
                name="option"
                onClick={setCorrectOption(1)}
              ></input>
              <input
                placeholder="Text"
                className="py-2 px-44 rounded-lg my-2"
                onChange={(e) => setOption2(e.target.value)}
              ></input>
            </div>
            <div>
              <input
                type="radio"
                className="mx-5"
                name="option"
                onClick={setCorrectOption(1)}
              ></input>
              <input
                placeholder="Text"
                className="py-2 px-44 rounded-lg my-2"
                onChange={(e) => setOption3(e.target.value)}
              ></input>
            </div>
            <div>
              <input
                type="radio"
                className="mx-5"
                name="option"
                onClick={setCorrectOption(1)}
              ></input>
              <input
                placeholder="Text"
                className="py-2 px-44 rounded-lg my-2"
                onChange={(e) => setOption4(e.target.value)}
              ></input>
            </div>
          </div>
          <div>
            <button
              onClick={cancelButton}
              className="bg-white px-10 py-2 rounded-lg mx-6"
            >
              Cancel
            </button>
            <button
              className="bg-white px-10 py-2 rounded-lg mx-6"
              onClick={(e) => createQuizButton(e)}
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

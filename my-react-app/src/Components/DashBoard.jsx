import Sidebar from "./Sidebar";
import TrendingQuiz from "./TrendingQuiz";
const DashBoard = () => {
  const quiz = [
    {
      quiz: "Quiz 1",
      date: "04 Sept 2023",
      views: "987",
    },
    {
      quiz: "Quiz 2",
      date: "04 Sept 2023",
      views: "987",
    },
    {
      quiz: "Quiz 3",
      date: "04 Sept 2023",
      views: "987",
    },
    {
      quiz: "Quiz 4",
      date: "04 Sept 2023",
      views: "987",
    },
    {
      quiz: "Quiz 5",
      date: "04 Sept 2023",
      views: "987",
    },
    {
      quiz: "Quiz 6",
      date: "04 Sept 2023",
      views: "987",
    },
    {
      quiz: "Quiz 7",
      date: "04 Sept 2023",
      views: "987",
    },
  ];
  return (
    <div>
      <div className="bg-[#EDEDED]  px-10 py-32">
        <div className="impression flex flex-row my-5">
          <div className="quizCreated text-5xl text-orange-600 mx-4 bg-white px-20 py-5 rounded-lg">
            12 Quiz created
          </div>
          <div className="questionCreated text-5xl text-green-600 mx-4 bg-white px-20 py-5 rounded-lg">
            110 Question created
          </div>
          <div className="totalImpression text-5xl text-blue-700 mx-4 bg-white px-20 py-5 rounded-lg">
            989 Total impression
          </div>
        </div>
        <h1 className="text-4xl font-bold py-5">Trending Quizs</h1>
        <div className="flex flex-row">
          {quiz.map((data) => {
            return (
              <TrendingQuiz
                quiz={data.quiz}
                date={data.date}
                views={data.views}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default DashBoard;

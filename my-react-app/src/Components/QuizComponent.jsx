import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const QuizComponent = () => {
  const { quizId } = useParams();
  console.log(quizId);
  const token = localStorage.getItem("token");
  const authString = `Bearer ${token}`;

  useEffect(() => {
    // Fetch Opertaion
    const fetchQuizDetails = async () => {
      // URL FOr FEtching Data From Backend
      const url = `http://localhost:3000/quiz/${quizId}`;

      // OPtions For Fetching Operation
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: authString,
        },
      };
      console.log("Reachhed Here ");
      console.log(quizId);

      // Fetch Function
      const response = await fetch(url, options);

      console.log("But Did't Reached Here");
      // Getting Response from backend
      const data = await response.json();
      console.log(data);
    };
    fetchQuizDetails();
  }, [quizId]);
  return (
    <div>
      <h1>Hii</h1>
    </div>
  );
};
export default QuizComponent;

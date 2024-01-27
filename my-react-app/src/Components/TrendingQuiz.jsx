const TrendingQuiz = (props) => {
  return (
    <div className="p-10 bg-white m-3">
      <div>
        <div>{props.quiz}</div>
        <div>{props.views}</div>
      </div>
      <div> Created On: {props.date}</div>
    </div>
  );
};
export default TrendingQuiz;

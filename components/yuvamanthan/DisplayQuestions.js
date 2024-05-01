import { questions } from "data/questions";
import { useState } from "react";
import ShowSurveyResults from "./ShowSurveyResults";
import { useZustandStore } from "@hooks/useStore";

const DisplayQuestions = () => {
  const {
    questionNumber,
    increase,
    decrease,
    setResults,
    results,
    setShowResults,
    showResults,
    setstartGame,
  } = useZustandStore();
  const [answers, setAnswers] = useState({});

  const handleCheckboxChange = (e, boxNumber) => {
    const { name, checked } = e.target;
    setAnswers((prevAnswers) => {
      const boxAnswers = prevAnswers[boxNumber] || {};

      const updatedBoxAnswers = {
        ...boxAnswers,
        [name]: checked
          ? (boxAnswers[name] || 0) + 1
          : (boxAnswers[name] || 0) - 1,
      };
      updatedBoxAnswers[name] === 0 && delete updatedBoxAnswers[name];

      return {
        ...prevAnswers,
        [boxNumber]: updatedBoxAnswers,
      };
    });
  };

  const onSubmit = () => {
    const sortedResults = Object.entries(answers)
      .map(([boxNumber, boxAnswers]) => ({
        boxNumber: parseInt(boxNumber),
        count: Object.values(boxAnswers).reduce(
          (total, value) => total + value,
          0
        ),
      }))
      .sort((a, b) => b.count - a.count);
    setResults(sortedResults);
    setShowResults(true);
  };
  const handleExitClick = () => {
    // Go back to the previous page
    setstartGame(false);
    console.log("setting");
  };
  return (
    <div>
      <div className="my-5 ">
        {!showResults &&
          questions.map((question, i) => {
            if (i !== questionNumber) return null;
            return (
              <div key={i}>
                <div className="bg-white p-2">
                  <div className="flex items-center bg-gray-100 p-4 rounded ">
                    <div className="w-4 h-4 rounded-full bg-primary mr-2 hidden md:block"></div>
                    <p className=" text-gray-800">
                      Directions: Tick the items in each box that best describe
                      you. You may make as many or as few ticks in each box as
                      you choose.
                    </p>
                  </div>
                </div>
                {question.questionList.map((questionItem, j) => (
                  <div key={j} className="bg-white shadow p-6">
                    <h3 className="text-2xl font-bold mb-4">
                      {questionItem.question}
                    </h3>
                    <ul className="ks-cboxtags">
                      {questionItem.options.map((option, k) => (
                        <li key={k}>
                          <input
                            type="checkbox"
                            id={option}
                            name={option}
                            value={option}
                            onClick={(e) =>
                              handleCheckboxChange(e, question.box)
                            }
                          />
                          <label
                            htmlFor={option}
                            for={option}
                            className="text-gray-700"
                          >
                            {option}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="flex gap-4 w-full">
                  <button
                    className={`btn btn-primary mt-10`}
                    onClick={
                      questionNumber == 0 ? handleExitClick : () => decrease(1)
                    }
                  >
                    Back
                  </button>
                  <button
                    className={`btn btn-primary mt-10  ${
                      questionNumber == 15 ? "hidden" : "block"
                    }`}
                    onClick={() => increase(1)}
                  >
                    Next
                  </button>
                  {!showResults && (
                    <div
                      className={`mt-10 ${
                        questionNumber == 15 ? "block" : "hidden"
                      }`}
                    >
                      <button className="btn btn-primary" onClick={onSubmit}>
                        Submit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        {showResults && <ShowSurveyResults results={results} />}
      </div>
    </div>
  );
};

export default DisplayQuestions;

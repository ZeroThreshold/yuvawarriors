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

  return (
    <div>
      <div className="my-5">
        {!showResults &&
          questions.map((question, i) => {
            if (i !== questionNumber) return null;
            return (
              <div key={i}>
                {question.questionList.map((questionItem, j) => (
                  <div key={j} className="bg-white rounded shadow p-6">
                    <h3 className="text-2xl font-bold mb-4">
                      {questionItem.question}
                    </h3>
                    <div>
                      {questionItem.options.map((option, k) => (
                        <div key={k}>
                          <input
                            type="checkbox"
                            id={option}
                            name={option}
                            value={option}
                            onClick={(e) =>
                              handleCheckboxChange(e, question.box)
                            }
                            className="form-checkbox text-primary-500 focus:ring-primary-500 rounded"
                          />
                          <label
                            htmlFor={option}
                            className="text-gray-700 ml-4"
                          >
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="flex gap-4 w-full">
                  <button
                    className={`btn btn-primary mt-10  ${
                      questionNumber == 0 ? "hidden" : "block"
                    }`}
                    onClick={() => decrease(1)}
                  >
                    back
                  </button>
                  <button
                    className={`btn btn-primary mt-10  ${
                      questionNumber == 15 ? "hidden" : "block"
                    }`}
                    onClick={() => increase(1)}
                  >
                    Next
                  </button>
                </div>
              </div>
            );
          })}
        {!showResults && (
          <div
            className={`flex mt-4 ${questionNumber == 15 ? "block" : "hidden"}`}
          >
            <button className="btn btn-primary w-full" onClick={onSubmit}>
              Submit
            </button>
          </div>
        )}
        {showResults && <ShowSurveyResults results={results} />}
      </div>
    </div>
  );
};

export default DisplayQuestions;

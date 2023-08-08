import { useState } from "react";

export const NotInDom = () => {
  const [isLearning, setIsLearning] = useState(false);
  return (
    <div>
      {isLearning ? (
        <div data-testid="mainSection">You are learning !</div>
      ) : (
        <div>
          <button
            type="button"
            className="bg-green-300"
            onClick={() => {
              setIsLearning(true);
            }}
          >
            Start to learning
          </button>
        </div>
      )}
    </div>
  );
};

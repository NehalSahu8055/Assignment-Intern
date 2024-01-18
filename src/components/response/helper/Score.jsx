import React from "react";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";

function Score({ data, correctResponseArray }) {
  return (
    <>
      <div className="py-10 text-center text-2xl">
        Your Scored
        <span className="px-1 text-3xl font-semibold text-green-600">
          {correctResponseArray.length}
        </span>
        out of&nbsp;
        <span className="inline-flex items-center text-2xl font-semibold">
          {data.length}
          <div className="inline-flex pl-2">
            {correctResponseArray.length == 10 && (
              <span className="text-3xl">🎉</span>
            )}
            {correctResponseArray.length < 10 &&
              correctResponseArray.length > 5 && (
                <SentimentVerySatisfiedIcon
                  sx={{ fontSize: 30, color: "green" }}
                />
              )}
            {correctResponseArray.length < 10 && (
              <SentimentNeutralIcon sx={{ fontSize: 30, color: "red" }} />
            )}
          </div>
        </span>
      </div>
      <hr />
    </>
  );
}

export default Score;

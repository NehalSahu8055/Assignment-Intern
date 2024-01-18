import React, { useEffect, useState } from "react";
import CollectResponse from "./helper/CollectResponse";
import Score from "./helper/Score";
import Feedback from "./helper/Feedback";

function Response({ data }) {
  const ratingCount = data.reduce((acc, item) => acc + item.rating, 0);
  const correctResponseArray = data.filter((item) => item.isResponseCorrect);
  const incorrectResponseArray = data.filter((item) => !item.isResponseCorrect);
  const typoArray = data.filter((item) => item.isTypo);

  return (
    <div className="px-2 text-slate-600">
      <CollectResponse
        correctResponseArray={correctResponseArray}
        incorrectResponseArray={incorrectResponseArray}
      />
      <Score data={data} correctResponseArray={correctResponseArray} />
      <Feedback data={data} ratingCount={ratingCount} typoArray={typoArray} />
    </div>
  );
}

export default Response;

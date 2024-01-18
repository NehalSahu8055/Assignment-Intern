import React from "react";

function CollectResponse({ correctResponseArray, incorrectResponseArray }) {
  return (
    <section className="responses mx-auto grid max-w-xl gap-4" id="responses">
      <h4 className="sr-only"> Responses</h4>
      <article className="correct-reponses">
        <h4 className="pb-3 pt-4 text-xl font-bold">Correct Responses ✅</h4>
        <div>
          <div className="flex">
            <span className="grid w-full place-content-center border py-1 text-center text-lg font-semibold">
              Question
            </span>
            <span className="grid w-full place-content-center border py-1 text-center text-lg font-semibold">
              Response
            </span>
          </div>
          {correctResponseArray.map((item, index) => {
            return (
              <div
                key={"correctRes" + index}
                className="grid w-full grid-cols-2"
              >
                <span className="border text-center">{item.id}</span>
                <span className="border px-4  text-center">
                  {!item.response ? "Not Attempted" : item.response}
                </span>
              </div>
            );
          })}
        </div>
      </article>
      <article className="incorrect-reponses">
        <h4 className="pb-3 pt-4 text-xl font-bold">
          Incorrect / Not Attempted Responses ❌
        </h4>
        <div>
          <div className="flex">
            <span className="grid w-full place-content-center border py-1 text-center text-lg font-semibold">
              Question
            </span>
            <span className="grid w-full place-content-center border py-1 text-center text-lg font-semibold">
              Response
            </span>
          </div>
          {incorrectResponseArray.map((item, index) => {
            return (
              <div
                key={"incorrectRes" + index}
                className="grid w-full grid-cols-2"
              >
                <span className="border text-center">{item.id}</span>
                <span className="border px-4  text-center">
                  {!item.response ? "Not Attempted" : item.response}
                </span>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
}

export default CollectResponse;

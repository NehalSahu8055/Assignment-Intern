import React from "react";

function Feedback({ data, ratingCount, typoArray }) {
  return (
    <article className="px-4 pb-4 pt-2 ">
      <h4 className="pt-2 text-lg font-semibold">💡 Feedback</h4>
      <ul>
        <li className="flex gap-1">
          Is there any typo in the quiz?
          {typoArray.length <= 0 ? (
            "No"
          ) : (
            <>
              <span className="pl-2 text-red-400">
                Yes ({typoArray.length})
              </span>
              [
              <ul className="flex gap-1">
                {typoArray.map((item, index) => {
                  return <li key={"typoQues" + index}>Q: {item.id},</li>;
                })}
              </ul>
              ]
            </>
          )}
        </li>
        <li>Average Rating: {(ratingCount / data.length).toFixed(2)}</li>
      </ul>
    </article>
  );
}

export default Feedback;

import React, { useState } from "react";
import Rating from "@mui/material/Rating";

function Quiz({ data }) {
  return data.map((query, index) => {
    const stateData = {
      isResponseCorrect: false,
      isTypo: false,
      response: "",
      rating: 0,
    };

    const [state, setState] = useState(stateData);

    const { id, ques, ans, isResponseCorrect, isTypo, rating } = query;
    query = {
      ...query,
      rating: state.rating,
      response: state.response,
      isTypo: state.isTypo,
      isResponseCorrect: ans == state.response,
    };

    data[data.findIndex((item) => item.id == id)] = query;

    return (
      <fieldset
        key={"query" + index}
        className="mb-3 rounded-lg border p-3 shadow-md"
      >
        <legend className="sr-only">Question {id}</legend>
        <div className="flex justify-between">
          <span>
            {id}. {ques}
          </span>
          <Rating
            name="simple-controlled"
            value={state.rating}
            size="small"
            onChange={(event, newValue) => {
              event.stopPropagation();
              setState((prev) => {
                return { ...prev, rating: newValue };
              });
            }}
          />
        </div>
        <textarea
          id="commentTextAreaID"
          onInput={(e) => {
            setState((prev) => {
              return { ...prev, response: e.target.value };
            });
          }}
          name="responseQ1"
          className="mt-2 flex h-[4rem] w-full resize-none items-center justify-center overflow-auto rounded-md border p-2  outline-none ring-slate-300 transition focus:ring-1 "
          placeholder="Add your answer..."
          maxLength="10"
        ></textarea>
        <div className="rightOrWrong1 flex justify-end pt-2 text-xs text-slate-500">
          <span className="pr-3">Did you found any typo?</span>
          <div className="pr-2">
            <input
              id={"wrong" + id}
              className="mr-1"
              onChange={(e) => {
                setState((prev) => {
                  return { ...prev, isTypo: true };
                });
              }}
              name={"rightOrWrong" + id}
              checked={state.isTypo}
              type="radio"
            />
            <label htmlFor={"wrong" + id}>Yes</label>
          </div>
          <div>
            <input
              id={"right" + id}
              className="mr-1"
              onChange={(e) => {
                setState((prev) => {
                  return { ...prev, isTypo: false };
                });
              }}
              name={"rightOrWrong" + id}
              checked={!state.isTypo}
              type="radio"
            />
            <label htmlFor={"right" + id}>No</label>
          </div>
        </div>
      </fieldset>
    );
  });
}

export default Quiz;

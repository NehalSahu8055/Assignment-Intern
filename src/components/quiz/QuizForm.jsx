import React from "react";
import Quiz from "./Quiz";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function QuizForm({ data }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className="mx-auto max-w-xl"
    >
      <Quiz data={data} />
      <Link
        to="/response"
        className="fixed bottom-0 left-0 right-0 mt-2 flex w-full justify-end bg-white py-3 pr-4 shadow-md shadow-black"
      >
        <Button
          onChange={(e) => {
            e.stopPropagation();
          }}
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </Link>
    </form>
  );
}

export default QuizForm;

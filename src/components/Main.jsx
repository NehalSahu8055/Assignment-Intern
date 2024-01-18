import React, { useState } from "react";
import QuizForm from "./quiz/QuizForm";

function App({ data }) {
  return (
    <main className="mx-4 mb-20 mt-6 text-slate-800">
      <QuizForm data={data}></QuizForm>
    </main>
  );
}

export default App;

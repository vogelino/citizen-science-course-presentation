import React from "react";
import CodeSlide from "../../components/CodeSlide";

export default () => (
  <>
    <Exercise1Recap />
    <Exercise2Recap />
  </>
);

function Exercise1Recap() {
  return (
    <CodeSlide title="Übung 1" stackBlitzId="js-course-exercise-recap-1" />
  );
}

function Exercise2Recap() {
  return (
    <CodeSlide title="Übung 2" stackBlitzId="js-course-exercise-recap-2" />
  );
}

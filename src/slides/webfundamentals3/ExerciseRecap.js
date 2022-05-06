import React from "react";
import CodeSlide from "../../components/CodeSlide";

export default () => (
  <>
    <ExerciseSolutionSarah />
    <ExerciseSolutionJonas />
    <ExerciseSolutionLinus />
    <ExerciseSolutionGustav />
    <ExerciseSolutionLucas />
  </>
);

function ExerciseSolutionSarah() {
  return (
    <CodeSlide
      title="Files to Objects (Solution Sarah)"
      stackBlitzId="js-5nnk5p"
    />
  );
}

function ExerciseSolutionJonas() {
  return (
    <CodeSlide
      title="Files to Objects (Solution Jonas)"
      stackBlitzId="js-course-exercise-filenames-to-objects-yaiqdg"
    />
  );
}

function ExerciseSolutionLinus() {
  return (
    <CodeSlide
      title="Files to Objects (Solution Linus)"
      stackBlitzId="js-course-exercise-filenames-to-objects-yaiqdg"
    />
  );
}

function ExerciseSolutionGustav() {
  return (
    <CodeSlide
      title="Files to Objects (Solution Gustav)"
      stackBlitzId="js-course-exercise-filenames-to-objects-yaiqdg"
    />
  );
}

function ExerciseSolutionLucas() {
  return (
    <CodeSlide
      title="Files to Objects (Solution Lucas)"
      stackBlitzId="js-course-exercise-filenames-to-objects-solution"
    />
  );
}

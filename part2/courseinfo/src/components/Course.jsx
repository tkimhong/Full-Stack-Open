const Header = (props) => <h2>{props.course}</h2>;

const Content = (props) => (
  <div>
    {props.parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </div>
);

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
);

const Total = (props) => (
  <p>
    <strong>total of {props.total} exercises</strong>
  </p>
);

const Course = (props) => {
  const total = props.course.parts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.exercises;
  }, 0);

  return (
    <>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total total={total} />
    </>
  );
};

export default Course;

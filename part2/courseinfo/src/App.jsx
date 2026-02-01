const Header = (props) => <h1>{props.course}</h1>;

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

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;

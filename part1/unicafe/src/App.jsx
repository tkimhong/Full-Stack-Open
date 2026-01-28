import { set } from "mongoose";
import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    // console.log("dididi");
    setGood(good + 1);
  };

  return (
    <>
      <h1>give feedback</h1>
      {/* buttons */}
      <Button onClick={handleGood} text="good" />
      <h1>statistics</h1>
      {/* good, neutral, bad */}
    </>
  );
};

export default App;

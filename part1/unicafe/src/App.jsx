import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>give feedback</h1>
      {/* buttons */}
      <h1>statistics</h1>
      {/* good, neutral, bad */}
    </>
  );
};

export default App;

import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div>
        find countries{" "}
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
    </div>
  );
};

export default App;

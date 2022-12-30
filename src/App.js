import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { setDataaa } from "./Action/action";

function App() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setDataaa("Updated redux Data"));
  };

  const data = useSelector((state) => state.data);
  return (
    <div className="App">
      <div>Welcome to react learnings</div>
      <br />
      <button onClick={handleClick}>Test</button>
      <br />
      <br />
      {data}
    </div>
  );
}

export default App;

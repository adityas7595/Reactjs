import "./App.css";
import Pokemon from "./Pokemon/Pokemon";
import Todo from "./Todo/Todo";
import { Routes, Route } from "react-router-dom";
import UseRefs from "./UseRef/UseRef";
import { BioProvide } from "./UseContext";
import Home from "./UseContext/Home";

function App() {
  return (
    <BioProvide>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/ref" element={<UseRefs />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BioProvide>
  );
}

export default App;

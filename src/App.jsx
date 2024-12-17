import "./App.css";
import Pokemon from "./Pokemon/Pokemon";
import Todo from "./Todo/Todo";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="/pokemon" element={<Pokemon />} />
    </Routes>
  );
}

export default App;

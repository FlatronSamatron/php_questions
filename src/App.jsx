import QuestionList from "./components/QuestionList";
import { Routes, Route } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<QuestionList />} />
        {/* <Route path="/exercise/:id" element={<Exercise />} />
        <Route path="/random" element={<Random />} /> */}
      </Routes>
    </div>
  );
}

export default App;

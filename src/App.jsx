import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Form";
import Submitted from "./Submitted";
import Failure from "./Failure";

function App() {
  return <div>
    <Router>
      <Routes>
        <Route element={<Form />} path="/"></Route>
        <Route element={<Submitted />} path="/submitted"></Route>
        <Route element={<Failure />} path="/failure"></Route>
      </Routes>
    </Router>

  </div>
}

export default App;
import { Route, Routes } from "react-router";

import Main from "./pages/Main";
import Pet from "./pages/Pet";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pet" element={<Pet />} />
      </Routes>
    </>
  );
}

export default App;

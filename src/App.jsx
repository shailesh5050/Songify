import { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Sidebar />
      <Navbar />
    </>
  );
}

export default App;

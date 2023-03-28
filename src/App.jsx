import { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import SongCard from "./Components/SongCard";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="main">
        <SongCard />
      </div>
    </>
  );
}

export default App;

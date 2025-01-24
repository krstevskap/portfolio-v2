import "./App.css";
import Loader from "./components/Loader/Loader";
import Homepage from "./pages/Homepage/Homepage";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadFakeData = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };
    loadFakeData();
  }, []);

  return <div className="App">{isLoading ? <Loader /> : <Homepage />}</div>;
}

export default App;

import First from "./components/first";
import "./App.css";
import Second from "./components/second";
import Third from "./components/third";

function App() {
  return (
    <>
      <div className="container">
        <h2>React-Stars With half starts</h2>
        <First></First>
      </div>

      <div className="container">
        <h2>React-Stars Without half starts</h2>
        <Second></Second>
      </div>

      <div className="container">
        <h2>React-Rating Without half starts</h2>
        <div className="third"><Third></Third></div>
      </div>
    </>
  );
}

export default App;

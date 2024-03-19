import First from "./components/first";
import "./App.css";
import Second from "./components/second";

function App() {
  return (
    <>
      <div className="container">
        <h2>With half starts</h2>
        <First></First>
      </div>

      <div className="container">
        <h2>Without half starts</h2>
        <Second></Second>
      </div>
    </>
  );
}

export default App;

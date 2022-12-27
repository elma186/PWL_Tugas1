import "./App.css";
import Waktu from "./Component/Class/waktu";
import Home from "./Component/Fungsional/Home";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Data Pegawai</h1>
        <div className="waktu">
          <Waktu start="0" />
        </div>
      </div>
      <Home />
    </div>
  );
}

export default App;

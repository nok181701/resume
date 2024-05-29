import { PDFViewer } from "@react-pdf/renderer";
import Resume from "./Resume";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PDFViewer style={{ width: "100%", height: "90vh" }}>
          <Resume />
        </PDFViewer>
      </header>
    </div>
  );
}

export default App;

import { Routing } from "./components/routing";
import "./App.css";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Container>
        <ToastContainer />
        <Routing />
      </Container>
    </div>
  );
}

export default App;

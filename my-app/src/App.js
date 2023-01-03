import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer/Footer"
import { getQueriesForElement } from "@testing-library/react";

function App() {
  
  return (
    <div className="App">
      <Header />
     <Footer />
    </div>
  );
}
export default App;

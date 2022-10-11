import "./App.css";
import Footer from "./Footer";
import logo from "./header-dictionary.png";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Header-img img-fluid" alt="logo" />
      </header>
      <div className="card-main m-4"></div>
      <Footer />
    </div>
  );
}

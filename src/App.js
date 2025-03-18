import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather />
        </header>
        <footer>
          <p>
            Coded by{" "}
            <a
              href="https://juliana-broersen.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Juliana Broeresn
            </a>
          </p>
          <p>
            Open-sourced on{" "}
            <a
              href="https://github.com/julbroersen/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

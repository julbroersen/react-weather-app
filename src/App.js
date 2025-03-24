import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather defaultCity="New York" />
        </header>
        <footer>
          <p>
            Coded by{" "}
            <a
              href="https://juliana-broersen.netlify.app/"
              target="_blank"
              rel=" noopener noreferrer"
            >
              Juliana Broeresn
            </a>
          </p>
          <p>
            Open-sourced on{" "}
            <a
              href="https://github.com/julbroersen/react-weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      {" "}
      <h1 className="container text-center">Dictionary</h1>
      <main>
        <Dictionary defaultKeyword="hello" />
      </main>
      <footer className="App-footer">
        {" "}
        <p class="text-center mt-5">
          👋🏾 This project was coded by Olivia Popoola, and it is
          <a
            href="https://github.com/OliviaPopoola/dictionary-project"
            target="_blank"
          >
            {" "}
            {""}
            open source
          </a>
        </p>{" "}
      </footer>
    </div>
  );
}

export default App;

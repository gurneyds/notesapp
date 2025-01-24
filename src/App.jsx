import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="logo react" alt="React logo" />

        <h1>Hello Africa Team!</h1>

        <p>{"It's not much, but it demonstrates:"}</p>
        <ul style={{ textAlign: "left" }}>
          <li>New AWS account and user creation and configuration</li>
          <li>Create a new React/Vite project</li>
          <li>Github repo creation and configuration (SSH keys)</li>
          <li>Amplify installation and configuration</li>
          <li>Automated deployment</li>
          <li>Local environment setup for quick CI/CD functionality</li>
          <li>Famililary with the AWS console</li>
          <li>More to come!</li>
        </ul>
      </header>
    </div>
  );
}

export default App;

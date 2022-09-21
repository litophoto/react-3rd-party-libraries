import "./App.css";
import { ExampleForm } from "./react-hook-form/example";
import { RegisterFields } from "./react-hook-form/RegisterFields";
import { RegisterForm } from "./react-hook-form/RegisterForm";
import { CompactForm } from "./react-hook-form/CompactForm";
import { ControlledForm } from "./react-hook-form/ControlledForm";
import { ControlledTextField } from "./react-hook-form/ControlledTextField";

function App() {
  return (
    <div className="App">
      <ExampleForm></ExampleForm>
      <RegisterFields></RegisterFields>
      <RegisterForm></RegisterForm>
      <CompactForm></CompactForm>
      <ControlledForm></ControlledForm>
      <ControlledTextField></ControlledTextField>
    </div>
  );
}

export default App;

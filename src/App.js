import Answer from "./components/answer/Answer";
import PhysicsForm from "./components/physics-form/PhysicsForm";
import PhysicsValues from "./components/physics-values/PhysicsValues";

function App() {
  return (
    <div className="App">
      <PhysicsValues />
      <PhysicsForm />
      <Answer />
    </div>
  );
}

export default App;

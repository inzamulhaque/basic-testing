import "./App.css";
import FruitList from "./components/FruitList/FruitList";
import PrimaryButton from "./components/PrimaryButton";
import User from "./components/user/User";

function App() {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple"];

  return (
    <>
      <div>
        {/* <h1>Hello World!</h1>
        <PrimaryButton />
        <PrimaryButton actionType="Delete" /> */}

        <User />

        {/* <FruitList fruitList={fruits} /> */}
      </div>
    </>
  );
}

export default App;

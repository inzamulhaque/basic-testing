import "./App.css";
import FruitList from "./components/FruitList/FruitList";
import PrimaryButton from "./components/PrimaryButton";
import User from "./components/user/User";
import UserEvent from "./components/userEvent/UserEvent";
import UserList from "./components/UserList/UserList";

function App() {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple"];

  const users = [
    {
      name: "John Doe",
      age: 25,
    },
    {
      name: "Jane Smith",
      age: 30,
    },
    {
      name: "Bob Brown",
      age: 35,
    },
  ];

  return (
    <>
      <div>
        {/* <h1>Hello World!</h1>
        <PrimaryButton />
        <PrimaryButton actionType="Delete" /> */}

        {/* <User /> */}

        {/* <FruitList fruitList={fruits} /> */}

        {/* <UserList users={users} /> */}

        <UserEvent />
      </div>
    </>
  );
}

export default App;

import "./FruitList.css";

type FruitListProps = {
  fruitList: string[];
};

const FruitList = ({ fruitList }: FruitListProps) => {
  return (
    <div className="fruit-container">
      <h2>Fruit List</h2>

      {fruitList.length === 0 ? (
        <p>No fruits available.</p>
      ) : (
        <ul className="fruit-list">
          {fruitList.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FruitList;

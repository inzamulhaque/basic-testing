import { render, screen } from "@testing-library/react";
import FruitList from "../components/FruitList/FruitList";

const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple"];

describe("FruitList", () => {
  it("should render the fruit list with list items", () => {
    render(<FruitList fruitList={fruits} />);

    const list = screen.getByRole("list");
    const listItem = screen.getAllByRole("listitem");

    expect(list).toBeInTheDocument();
    expect(listItem).toHaveLength(fruits.length);
  });
});

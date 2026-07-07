import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../components/Counter/Counter";
import { createStore } from "../redux/store";
import { Provider } from "react-redux";

it("should increase counter value by 1 when clicking increase button", async () => {
  userEvent.setup();
  render(
    <Provider store={createStore()}>
      <Counter />
    </Provider>,
  );

  const increaseButton = screen.getByRole("button", {
    name: "Increment",
  });

  await userEvent.click(increaseButton);

  const counterEl = screen.getByRole("heading", {
    level: 1,
  });

  expect(counterEl).toHaveTextContent("Counter: 1");
});

it("should decrease counter value by 1 when clicking decrease button", async () => {
  userEvent.setup();
  render(
    <Provider store={createStore()}>
      <Counter />
    </Provider>,
  );

  const increaseButton = screen.getByRole("button", {
    name: "Decrement",
  });

  await userEvent.click(increaseButton);

  const counterEl = screen.getByRole("heading", {
    level: 1,
  });

  expect(counterEl).toHaveTextContent("Counter: -1");
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../components/Form/Form";

const submitMock = vi.fn();

it("should show the input value in the heading", async () => {
  userEvent.setup();
  render(<Form onSubmit={(data) => console.log(data)} />);

  const inputEl = screen.getByRole("textbox");
  await userEvent.type(inputEl, "Hello World");

  const headingEl = screen.getByRole("heading", {
    level: 2,
  });

  expect(headingEl).toHaveTextContent("Hello World");
});

it("should call onSubmit with the input value when the form is submitted", async () => {
  userEvent.setup();
  render(<Form onSubmit={submitMock} />);

  const inputEl = screen.getByRole("textbox");
  await userEvent.type(inputEl, "Hello World");

  const buttonEl = screen.getByRole("button");
  await userEvent.click(buttonEl);

  expect(submitMock).toHaveBeenCalledWith("Hello World");
});

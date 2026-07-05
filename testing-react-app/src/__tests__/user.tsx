import { render, screen } from "@testing-library/react";
import User from "../components/user/User";

it("should render the user component", () => {
  render(<User />);

  const element = screen.getAllByRole("textbox");

  expect(element).toHaveLength(2);
});

it("should render the user component textbox", () => {
  render(<User />);

  const element = screen.getByRole("textbox", {
    name: "Name",
  });

  expect(element).toBeInTheDocument();
});

it("should render the user component h2", () => {
  render(<User />);

  const element = screen.getByRole("heading", {
    level: 2,
  });

  expect(element).toBeInTheDocument();
});

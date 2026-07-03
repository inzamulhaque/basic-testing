import { render, screen } from "@testing-library/react";
import User from "../components/user/User";

it("should render the user component", () => {
  render(<User />);

  const element = screen.getAllByRole("textbox");

  expect(element).toHaveLength(2);
});

import { render, screen } from "@testing-library/react";
import UserEvent from "../components/userEvent/UserEvent";
import user from "@testing-library/user-event";

describe("UserEvent component", () => {
  it("should render the love counter with initial value of 0", () => {
    render(<UserEvent />);

    const headingEL = screen.getByRole("heading", { level: 3 });

    expect(headingEL).toBeInTheDocument();
  });

  it("should increase the love count when the 'Increase Love' button is clicked", async () => {
    user.setup();

    render(<UserEvent />);

    const increaseButton = screen.getByRole("button", {
      name: "Increase Love",
    });

    await user.click(increaseButton);

    const loveCount = screen.getByRole("heading", { level: 3 });

    expect(loveCount).toHaveTextContent("Your love count: 1");
  });
});

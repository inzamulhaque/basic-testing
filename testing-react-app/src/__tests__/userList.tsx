import { render, screen } from "@testing-library/react";
import UserList from "../components/UserList/UserList";

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

describe("UserList", () => {
  it("should render the welcome message after 500ms", async () => {
    render(<UserList users={users} />);

    const welcomeMessageEL = await screen.findByTestId(
      "welcome-message",
      {},
      { timeout: 2000 },
    );

    expect(welcomeMessageEL).toBeInTheDocument();
  });
});

import { logRoles, render, screen, within } from "@testing-library/react";
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

    // screen.logTestingPlaygroundURL();
  });

  it("should render the all rows", () => {
    const { container } = render(<UserList users={users} />);

    logRoles(container);

    // screen.debug();
    // const el = screen.getAllByRole("row");
    // screen.debug();

    const rows = within(screen.getByTestId("user-list-body")).getAllByRole(
      "row",
    );

    // expect(el).toHaveLength(users.length + 1); // +1 for the header

    expect(rows).toHaveLength(users.length);
  });
});

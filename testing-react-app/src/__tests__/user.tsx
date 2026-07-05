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

it("should render the user component and test by placeholder", () => {
  render(<User />);

  const element = screen.getByPlaceholderText("Enter Email");

  expect(element).toBeInTheDocument();
});

it("should render the user component and test by text", () => {
  render(<User />);

  const element = screen.getByText("Add Your Details");

  expect(element).toBeInTheDocument();
});

it("should render the user component and test by label text", () => {
  render(<User />);

  const element = screen.getByLabelText("Name");

  // const element = screen.getByLabelText("Name", {
  //   selector: ""
  // });

  expect(element).toBeInTheDocument();
});

it("should render the user component and test by alt text", () => {
  render(<User />);

  const element = screen.getByAltText("testing image");

  expect(element).toBeInTheDocument();
});

it("should render the user component and test by title text", () => {
  render(<User />);

  const element = screen.getByTitle("testing title");

  expect(element).toBeInTheDocument();
});

it("should render the user component and test by display value", () => {
  render(<User />);

  const element = screen.getByDisplayValue("User1");

  expect(element).toBeInTheDocument();
});

it("should render the user component and test by data test id", () => {
  render(<User />);

  const element = screen.getByTestId("testing-id");

  expect(element).toBeInTheDocument();
});

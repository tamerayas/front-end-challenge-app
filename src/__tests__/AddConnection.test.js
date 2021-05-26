import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AddConnection from "../components/AddConnection";

beforeEach(() => {
  render(<AddConnection />);
});

test("Test link name input change", () => {
  const inputEl = screen.getByPlaceholderText(/e.g. alphabet/i);

  expect(inputEl).toHaveValue("");

  userEvent.type(inputEl, "Google");

  expect(inputEl).toHaveValue("Google");
});

test("Test link url input change", () => {
  const inputEl = screen.getByPlaceholderText("e.g. http://abc.xyz");

  expect(inputEl).toHaveValue("");

  userEvent.type(inputEl, "https://www.google.com");

  expect(inputEl).toHaveValue("https://www.google.com");
});

test("Test adding connection", () => {
  expect(JSON.parse(localStorage.getItem("connections"))).toBeNull();

  const buttonEl = screen.getByRole("button");

  fireEvent.click(buttonEl);

  expect(JSON.parse(localStorage.getItem("connections"))).toHaveLength(1);
});

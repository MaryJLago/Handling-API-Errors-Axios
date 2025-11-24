// src/__tests__/LoginForm.test.jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../components/LoginForm";

test("Empty fields → shows required errors", async () => {
  render(<LoginForm />);
  userEvent.click(screen.getByText("Login"));
  expect(await screen.findByText("Email is required")).toBeInTheDocument();
  expect(await screen.findByText("Password is required")).toBeInTheDocument();
});

test("Wrong credentials → shows invalid credentials error", async () => {
  render(<LoginForm />);
  userEvent.type(screen.getByLabelText(/email/i), "wrong@example.com");
  userEvent.type(screen.getByLabelText(/password/i), "wrongpass");
  userEvent.click(screen.getByText("Login"));
  expect(await screen.findByText("Invalid Credentials")).toBeInTheDocument();
});

test("Correct credentials → shows success alert", async () => {
  render(<LoginForm />);
  userEvent.type(screen.getByLabelText(/email/i), "user@example.com");
  userEvent.type(screen.getByLabelText(/password/i), "secret");
  userEvent.click(screen.getByText("Login"));
  expect(await screen.findByText("Login successful")).toBeInTheDocument();
});

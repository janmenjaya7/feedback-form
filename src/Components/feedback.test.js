import { render, screen, fireEvent, waitFor } from "@testing-library/react";

// import App from "./App";
import Feedback from "./Feedback";

test("renders input fields correctly", () => {
  const { getByPlaceholderText } = render(<Feedback />);

  const nameInput = getByPlaceholderText("Name");
  const emailInput = getByPlaceholderText("name@example.com");
  const contactInput = getByPlaceholderText("Contact");
  const commentInput = getByPlaceholderText("Leave a comment here");

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(contactInput).toBeInTheDocument();
  expect(commentInput).toBeInTheDocument();
});

test("allows user to type in input fields", () => {
  const { getByPlaceholderText } = render(<Feedback />);

  const nameInput = getByPlaceholderText("Name");
  const emailInput = getByPlaceholderText("name@example.com");
  const contactInput = getByPlaceholderText("Contact");
  const commentInput = getByPlaceholderText("Leave a comment here");

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });
  fireEvent.change(contactInput, { target: { value: "1234567890" } });
  fireEvent.change(commentInput, {
    target: { value: "This is a test comment" },
  });

  expect(nameInput.value).toBe("John Doe");
  expect(emailInput.value).toBe("john@example.com");
  expect(contactInput.value).toBe("1234567890");
  expect(commentInput.value).toBe("This is a test comment");
});

test("displays validation error when submitting empty form", async () => {
  const { getByText } = render(<Feedback />);

  const submitButton = getByText("Submit");
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(getByText("Name is required")).toBeInTheDocument();
    expect(getByText("Email is required")).toBeInTheDocument();
    expect(getByText("Phone number is required")).toBeInTheDocument();
    expect(getByText("Message is required")).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import Asset from "../Asset";
import "@testing-library/jest-dom";

test("renders an image when src is provided", () => {
  const testMessage = "Test Image";
  render(<Asset src="test-image.jpg" message={testMessage} />);
  const imageElement = screen.getByRole("img", { name: testMessage });
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute("src", "test-image.jpg");
  expect(imageElement).toHaveAttribute("alt", testMessage);
});

test("renders a spinner when spinner is true", () => {
  render(<Asset spinner={true} />);
  const spinnerElement = screen.getByTestId("spinner");
  expect(spinnerElement).toBeInTheDocument();
});

test("renders a message when message is provided", () => {
  const testMessage = "Loading...";
  render(<Asset message={testMessage} />);
  const messageElement = screen.getByText(testMessage);
  expect(messageElement).toBeInTheDocument();
});


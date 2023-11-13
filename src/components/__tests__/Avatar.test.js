import React from "react";
import { render, screen } from "@testing-library/react";
import Avatar from "../Avatar";
import '@testing-library/jest-dom';

test("renders Avatar with given image", () => {
  const testSrc = "test-avatar.jpg";
  render(<Avatar src={testSrc} />);
  const avatarImage = screen.getByRole('img', { name: "avatar" });
  expect(avatarImage).toBeInTheDocument();
  expect(avatarImage).toHaveAttribute("src", testSrc);
});

test("renders Avatar with specified height", () => {
  const testHeight = 60;
  render(<Avatar src="test-avatar.jpg" height={testHeight} />);
  const avatarImage = screen.getByRole('img', { name: "avatar" });
  expect(avatarImage).toHaveAttribute("height", `${testHeight}`);
  expect(avatarImage).toHaveAttribute("width", `${testHeight}`);
});

test("renders Avatar with additional text", () => {
  const testText = "Test User";
  render(<Avatar src="test-avatar.jpg" text={testText} />);
  expect(screen.getByText(testText)).toBeInTheDocument();
});



import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "../NotFound";

test("NotFound component renders correctly", () => {
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );

  // Check if the message is rendered
  const message = screen.getByText(
    "Sorry, the page you're looking for doesn't exist."
  );
  expect(message).toBeInTheDocument();

  // Check if the link to the homepage is rendered
  const link = screen.getByRole("link", {
    name: "Click here to return to the Homepage.",
  });
  expect(link).toBeInTheDocument();
  expect(link.getAttribute("href")).toBe("/");
});

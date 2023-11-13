import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "../NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import {
  CurrentUserProvider,
  CurrentUserContext,
} from "../../contexts/CurrentUserContext";

test("renders NavBar", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  const signInLink = screen.getByRole("link", { name: "Sign in" });
  expect(signInLink).toBeInTheDocument();
});

test("renders link to the user profile for a logged in user", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );
  const profileAvatar = await screen.findByText("Profile");
  expect(profileAvatar).toBeInTheDocument();
});

test("renders sign in and sign up buttons on log out", () => {
  render(
    <Router>
      <CurrentUserContext.Provider value={null}>
        <NavBar />
      </CurrentUserContext.Provider>
    </Router>
  );
  const signInLink = screen.getByRole("link", { name: "Sign in" });
  expect(signInLink).toBeInTheDocument();
  const signUpLink = screen.getByRole("link", { name: "Sign up" });
  expect(signUpLink).toBeInTheDocument();
});

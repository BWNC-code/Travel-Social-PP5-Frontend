import { render, screen } from "@testing-library/react";
import NavBar from "../NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";

test("renders NavBar", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  //   screen.debug();
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

test("renders sign in and sign up buttons on log out", async () => {
    render(
      <Router>
        <CurrentUserProvider>
          <NavBar />
        </CurrentUserProvider>
      </Router>
    );
    const signOutLink = await screen.findByRole('link', {name: 'Sign out'})
  });
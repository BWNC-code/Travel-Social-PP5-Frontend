import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

// Mocks for components that are rendered by routes
jest.mock("./pages/posts/PostsPage", () => () => <div>PostsPage</div>);
jest.mock("./pages/auth/SignInForm", () => () => <div>SignInForm</div>);
jest.mock("./pages/auth/SignUpForm", () => () => <div>SignUpForm</div>);
jest.mock("./pages/posts/PostCreateForm", () => () => (
  <div>PostCreateForm</div>
));
jest.mock("./pages/posts/PostEditForm", () => () => <div>PostEditForm</div>);
jest.mock("./pages/posts/PostPage", () => () => <div>PostPage</div>);
jest.mock("./pages/profiles/ProfilePage", () => () => <div>ProfilePage</div>);
jest.mock("./pages/profiles/UsernameForm", () => () => <div>UsernameForm</div>);
jest.mock("./pages/profiles/UserPasswordForm", () => () => (
  <div>UserPasswordForm</div>
));
jest.mock("./pages/profiles/ProfileEditForm", () => () => (
  <div>ProfileEditForm</div>
));
jest.mock("./components/NotFound", () => () => <div>NotFound</div>);
// ... other mocks as needed ...

describe("App component routing", () => {
  test("renders PostsPage on root route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("PostsPage")).toBeInTheDocument();
  });

  test("renders SignInForm on /signin route", () => {
    render(
      <MemoryRouter initialEntries={["/signin"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("SignInForm")).toBeInTheDocument();
  });

  test("renders SignUpForm on /signup route", () => {
    render(
      <MemoryRouter initialEntries={["/signup"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("SignUpForm")).toBeInTheDocument();
  });

  test("renders PostCreateForm on /posts/create route", () => {
    render(
      <MemoryRouter initialEntries={["/posts/create"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("PostCreateForm")).toBeInTheDocument();
  });

  test("renders PostEditForm on /posts/:id/edit route", () => {
    render(
      <MemoryRouter initialEntries={["/posts/1/edit"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("PostEditForm")).toBeInTheDocument();
  });

  test("renders PostPage on /posts/:id route", () => {
    render(
      <MemoryRouter initialEntries={["/posts/1"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("PostPage")).toBeInTheDocument();
  });

  test("renders ProfilePage on /profiles/:id route", () => {
    render(
      <MemoryRouter initialEntries={["/profiles/1"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("ProfilePage")).toBeInTheDocument();
  });

  test("renders UsernameForm on /profiles/:id/edit/username route", () => {
    render(
      <MemoryRouter initialEntries={["/profiles/1/edit/username"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("UsernameForm")).toBeInTheDocument();
  });

  test("renders UserPasswordForm on /profiles/:id/edit/password route", () => {
    render(
      <MemoryRouter initialEntries={["/profiles/1/edit/password"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("UserPasswordForm")).toBeInTheDocument();
  });

  test("renders ProfileEditForm on /profiles/:id/edit route", () => {
    render(
      <MemoryRouter initialEntries={["/profiles/1/edit"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("ProfileEditForm")).toBeInTheDocument();
  });

  test("renders NotFound component for an unknown route", () => {
    render(
      <MemoryRouter initialEntries={["/unknown"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("NotFound")).toBeInTheDocument();
  });
});

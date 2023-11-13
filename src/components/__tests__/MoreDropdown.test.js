import React from "react";
import { render, fireEvent, waitFor, findByText } from "@testing-library/react";
import { act } from "react-dom/test-utils"; // Import the act function
import { MoreDropdown } from "../MoreDropdown";

// Define mock functions for handleEdit and handleDelete
const mockHandleEdit = jest.fn();
const mockHandleDelete = jest.fn();

test("MoreDropdown is visible and interactive", async () => {
  // Render the Dropdown component with mock functions
  let getByRole, getByLabelText;

  await act(async () => {
    const renderResult = render(
      <MoreDropdown
        handleEdit={mockHandleEdit}
        handleDelete={mockHandleDelete}
      />
    );
    getByRole = renderResult.getByRole;
    getByLabelText = renderResult.getByLabelText;
  });

  // Find the ellipsis icon by its role
  const ellipsisIcon = getByRole("button");

  // Simulate a click on the ellipsis icon
  await act(async () => {
    fireEvent.click(ellipsisIcon);
  });

  // Verify that the Dropdown menu is visible
  const editOption = getByLabelText("edit");
  const deleteOption = getByLabelText("delete");

  // Perform assertions as needed, e.g., to check if the options are visible and clickable
  expect(editOption).toBeInTheDocument();
  expect(deleteOption).toBeInTheDocument();

  // Simulate a click on the edit option and verify that the mock function is called
  await act(async () => {
    fireEvent.click(editOption);
  });
  expect(mockHandleEdit).toHaveBeenCalledTimes(1);

  // Simulate a click on the delete option and verify that the mock function is called
  await act(async () => {
    fireEvent.click(deleteOption);
  });
  expect(mockHandleDelete).toHaveBeenCalledTimes(1);
});

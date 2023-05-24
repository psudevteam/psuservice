import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import React from "react";
import "@testing-library/jest-dom";
import { RouterProvider } from "react-router-dom";
import { Router } from ".";

test("full app rendering/navigating", async () => {
  render(<RouterProvider router={Router} />);
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
});

import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { LoadingSpinner } from ".";

describe("Loading Spinner", () => {
  test("renders loading spinner", () => {
    render(<LoadingSpinner />);
    expect(screen.getByRole("status")).toBeDefined();
  });
});

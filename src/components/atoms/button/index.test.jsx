import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./component";

describe("Check Button", () => {
  test("check if button has present", () => {
    render(<Button />);
    const text = screen.getByRole("button");
    expect(text).toBeDefined;
  });

  test("check if button has correct children", () => {
    render(<Button>Login</Button>);
    const text = screen.getByText("Login");
    expect(text).toBeDefined;
  });
});

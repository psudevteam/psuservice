import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button", () => {
  test("renders button text", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Click Me");
  });

  test("applies default variant and size", () => {
    render(<Button>Default Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-blue-500");
    expect(button).toHaveClass("text-white");
    expect(button).toHaveClass("p-4");
    expect(button).toHaveClass("disabled:bg-gray-400");
  });

  test("applies custom variant and size", () => {
    render(
      <Button variant="error" size="lg">
        Custom Button
      </Button>,
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-red-600");
    expect(button).toHaveClass("text-white");
    expect(button).toHaveClass("p-6");
  });

  test("displays loading spinner when loading prop is true", () => {
    render(<Button loading>Loading Button</Button>);
    expect(screen.getByRole("status")).toBeDefined();
  });

  test("calls onClick handler when clicked", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Clickable Button</Button>);
    const btn = screen.getByRole("button");
    btn.click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

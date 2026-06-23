import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import { Button } from "./Button";

describe("[Button] shared component", () => {
  test("calls onClick when clicked", async () => {
    const handleClick = vi.fn();
    const { getByRole } = render(<Button onClick={handleClick}>Click me</Button>);
    const button = getByRole("button");

    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("does not call onClick when disabled", async () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <Button
        onClick={handleClick}
        disabled
      >
        Click me
      </Button>,
    );
    const button = getByRole("button");

    await userEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  test("has correct button type", () => {
    const { getByRole } = render(<Button type="submit">Submit</Button>);
    const button = getByRole("button");

    expect(button).toHaveAttribute("type", "submit");
  });

  test("renders icon", () => {
    const icon = <span data-testid="icon">Icon</span>;
    const { getByTestId } = render(<Button icon={icon}>Text</Button>);

    expect(getByTestId("icon")).toBeInTheDocument();
  });

  test("renders children", () => {
    const { getByText } = render(<Button>Click me</Button>);

    expect(getByText("Click me")).toBeInTheDocument();
  });
});

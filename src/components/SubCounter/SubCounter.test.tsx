import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { SubCounter } from "./SubCounter";

describe("SubCounter", () => {
  it("should call events", async () => {
    const user = userEvent.setup();
    const onIncrement = jest.fn();
    const onDecrement = jest.fn();
    render(
      <SubCounter
        count={0}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    );
    const incrementBtn = screen.getByRole("button", { name: /Increment/i });
    const decrementBtn = screen.getByRole("button", { name: /Decrement/i });
    await user.click(incrementBtn);
    await user.click(decrementBtn);
    expect(onIncrement).toHaveBeenCalledTimes(1);
    expect(onDecrement).toHaveBeenCalledTimes(1);
  });
});

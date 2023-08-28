import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  it("should render initial count value", () => {
    const counter = { initialCount: 1 };
    const { result } = renderHook(useCounter, { initialProps: counter });
    const { count } = result.current;
    expect(count).toBe(1);
  });
  it("should increment value by 1", async () => {
    const counter = { initialCount: 1 };
    const { result } = renderHook(useCounter, { initialProps: counter });
    await act(async () => {
      result.current.increment();
    });
    expect(result.current.count).toBe(2);
  });

  it("should decrement value by 1", async () => {
    const counter = { initialCount: 1 };
    const { result } = renderHook(useCounter, { initialProps: counter });
    await act(async () => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(0);
  });
});

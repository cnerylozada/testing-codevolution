import { render, screen } from "@testing-library/react";
import { BasicForm } from "./BasicForm";

describe("BasicForm", () => {
  it("should render basic schema", () => {
    render(<BasicForm />);
    const titleElement = screen.getByText(/Basic Form/i);
    const nameField = screen.getByPlaceholderText(/name/i);
    const submitButton = screen.getByTestId("submitButton");

    expect(titleElement).toBeInTheDocument();
    expect(nameField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("should render buttons at bottom", () => {
    render(<BasicForm />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
    const submitButton = buttons.find((_) => (_ as any).type === "submit");
    expect(submitButton?.textContent).toBe("Save");
  });

  it("should", () => {
    render(<BasicForm />);
  });
});

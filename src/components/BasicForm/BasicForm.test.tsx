import { render, screen, fireEvent, act } from "@testing-library/react";
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

  it("should render buttons at bottom with submitButton disabled", () => {
    render(<BasicForm />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
    const submitButton = buttons.find((_) => (_ as any).type === "submit");
    expect(submitButton?.textContent).toBe("Save");
    expect(submitButton).toBeDisabled();
  });

  it("should render errors if you trigger onBlur event in any input", async () => {
    render(<BasicForm />);
    const nameInput = screen.getByLabelText("Name");
    await act(async () => {
      fireEvent.change(nameInput, { target: { value: "" } });
      fireEvent.blur(nameInput);
    });
    const errorName = screen.getByText(/name is required/i);
    expect(errorName).toBeInTheDocument();
  });

  it("should able submitButton when form is valid", async () => {
    render(<BasicForm />);
    const nameInput = screen.getByLabelText("Name");
    const ageInput = screen.getByLabelText("Age");
    const submitButton = screen.getByRole("button", { name: /save/i });
    await act(async () => {
      fireEvent.change(nameInput, { target: { value: "Cristh" } });
      fireEvent.change(ageInput, { target: { value: "10" } });
    });
    expect(nameInput).toHaveValue("Cristh");
    expect(ageInput).toHaveValue("10");
    expect(submitButton).not.toBeDisabled();
  });
});

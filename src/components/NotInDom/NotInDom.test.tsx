import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NotInDom } from "./NotInDom";

describe("NotInDom", () => {
  test("should not render the mainSection", () => {
    render(<NotInDom />);
    const mainSection = screen.queryByTestId("mainSection");
    expect(mainSection).not.toBeInTheDocument();
  });
  test("should render the mainSection after click button", async () => {
    const user = userEvent.setup();
    render(<NotInDom />);
    await act(async () => {
      const button = screen.getByRole("button", {
        name: /start to learning/i,
      });
      await user.click(button);
    });
    const mainSection = screen.getByTestId("mainSection");
    expect(mainSection).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { NotInDom } from "./NotInDom";

describe("NotInDom", () => {
  test("should not render the mainSection", () => {
    render(<NotInDom />);
    const mainSection = screen.queryByTestId("mainSection");
    expect(mainSection).not.toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { Users } from "./Users";
import { mockUsers } from "../../mocks/mocks";

describe("Users", () => {
  it("should render users from mockService", async () => {
    render(<Users />);
    const users = await screen.findAllByTestId("userFromService");
    expect(users.length).toBe(mockUsers.length);
  });
});

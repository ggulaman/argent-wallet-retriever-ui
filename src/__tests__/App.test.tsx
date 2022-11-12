import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders app correctly, with the button and the textbox", () => {
  render(<App />);
  const searchButton = screen.getByRole("button");
  const ethAddressSearchTextfield = screen.getByRole("textbox");
  expect(searchButton).toBeInTheDocument();
  expect(ethAddressSearchTextfield).toBeInTheDocument();
});

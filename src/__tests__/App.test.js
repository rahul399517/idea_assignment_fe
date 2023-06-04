import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders 'working....' text", () => {
  render(<App />);
  const workingTextElement = screen.getByText("working....");
  expect(workingTextElement).toBeInTheDocument();
});

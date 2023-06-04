import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders 'Testcase added' text", () => {
  render(<App />);
  const workingTextElement = screen.getByText("Testcase added");
  expect(workingTextElement).toBeInTheDocument();
});

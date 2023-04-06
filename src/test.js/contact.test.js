import React from "react";
import { render, screen } from "@testing-library/react";
import { Contact } from "../Routes/Contact";

test("renders the contact form by default", () => {
  render(<Contact />);
  const formElement = screen.getAllByText("Contáctanos");
  expect(formElement).toBeDefined();
});
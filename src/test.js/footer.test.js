import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "../Components/Footer";

test("renders the footer", () => {
  render(<Footer />);
  const formElement = screen.getAllByText("Volver arriba");
  expect(formElement).toBeDefined();
});
test("renders footer button", () => {
  render(<Footer />);
  const btn = screen.getByRole("button", { name: "Volver arriba" });
  fireEvent.click(btn);
});
test("renders footer images", () => {
  render(<Footer />);
  screen.logTestingPlaygroundURL();
  const imgDH = screen.getByRole('img', { name: /dh\-logo/i });
  const imgFb = screen.getByRole('img', { name: /ícone do facebook/i });
  const imgTikTok = screen.getByRole('img', { name: /ícone do tiktok/i });
  expect(imgDH).toBeDefined();    
  expect(imgFb).toBeDefined();    
  expect(imgTikTok).toBeDefined();    
});
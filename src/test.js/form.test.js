import React from "react";
import { fireEvent, render, screen, act, waitFor } from "@testing-library/react";
import { Form } from "../Components/Form";

test("renders the contact form by default", () => {
    const component = render(<Form />);
    const inputName = component.getByPlaceholderText("Nombre");
    const inputEmail = component.getByPlaceholderText("Email");
    expect(inputName).toBeDefined();
    expect(inputEmail).toBeDefined();
});

test("send info on submit", () => {
    const onSubmit = jest.fn();
    const component = render(<Form onSubmit={onSubmit}/>);
    const inputName = component.getByPlaceholderText("Nombre");
    const inputEmail = component.getByPlaceholderText("Email");
    // const btnSend = component.getByTestId("Enviar");
    fireEvent.change(inputName, { target: { value: "Stiven" } });
    fireEvent.change(inputEmail, { target: { value: "stmolinag@gmail.com" } });
    const btnSend = component.getByRole("button", { type: "submit" });
    fireEvent.click(btnSend);
    expect(onSubmit).toHaveBeenCalledTimes(1);
});
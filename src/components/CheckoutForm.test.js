import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

    const first = screen.getByLabelText("First Name:")
    const last = screen.getByLabelText("Last Name:")
    const address = screen.getByLabelText("Address:")
    const city = screen.getByLabelText("City:")
    const state = screen.getByLabelText("State:")
    const zip = screen.getByLabelText("Zip:")
    const submit = screen.getByRole("button")

    userEvent.type(first, "Kevin")
    userEvent.type(last, "Sun")
    userEvent.type(address, "123 Four Street")
    userEvent.type(city, "Los Angeles")
    userEvent.type(state, "CA")
    userEvent.type(zip, "90031")
    userEvent.click(submit)

    expect(screen.getByTestId("successMessage")).toBeInTheDocument();
    expect(screen.getByText("Kevin Sun")).toBeInTheDocument()
    expect(screen.getByText("123 Four Street")).toBeInTheDocument()
    expect(screen.getByText("Los Angeles, CA 90031")).toBeInTheDocument()

});



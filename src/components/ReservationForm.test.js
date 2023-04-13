import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ReservationForm from './ReservationForm';

describe('Reservation Form', () => {
    test("reservation form is displayed", () => {
        render(
            <BrowserRouter>
                <ReservationForm />
            </BrowserRouter>
        );

        const form = document.getElementById('form');
        expect(form).toBeInTheDocument();
    });

    test("time slots appear after a date is selected", async () => {
        const todaysDate = new Date().toISOString().split('T')[0];
        const handleSubmit = jest.fn();
        render(
            <BrowserRouter>
                <ReservationForm onSubmit={handleSubmit} />
            </BrowserRouter>
        );

        await waitFor (() => {
            const dateInput = screen.getByLabelText(/choose date/i);
            fireEvent.focus(dateInput);
            fireEvent.change(dateInput, { target: { value: todaysDate } });
        });

        const timeInput = screen.getByRole('combobox', { name: /choose time/i });

        expect(timeInput.length).toBeGreaterThan(1);
    });

    /*

    test("contact form is submitted when valid data is filled out", async () => {
        const handleSubmit = jest.fn();
        const firstNameValue = "Testing";
        const emailValue = "testing@gmail.com";
        const commentValue = "a message that is at least 25 characters or more";

        render(
            <AlertProvider>
                <ContactForm onSubmit={handleSubmit} />
            </AlertProvider>
        );

        await waitFor(() => {
            const firstNameInput = screen.getByRole('textbox', { name: /name/i });
            fireEvent.change(firstNameInput, { target: { value: firstNameValue } });
        });

        await waitFor(() => {
            const emailInput = screen.getByRole('textbox', { name: /email address/i });
            fireEvent.change(emailInput, { target: { value: emailValue } });
        });

        await waitFor(() => {
            const commentInput = screen.getByRole('textbox', { name: /your message/i });
            fireEvent.change(commentInput, { target: { value: commentValue } });
        });

        await waitFor(() => {
            const submitButton = screen.getByRole("submit");
            fireEvent.click(submitButton);
        });

        expect(handleSubmit).toHaveBeenCalled();
    });
    */
});
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import ReservationForm from './ReservationForm';

describe('Reservation Form', () => {
    test("form is displayed", () => {
        render(
            <BrowserRouter>
                <ReservationForm />
            </BrowserRouter>
        );

        const form = document.getElementById('form');
        expect(form).toBeInTheDocument();
    });

    test("date field default selection is todays date", async () => {
        const todaysDate = new Date().toISOString().split('T')[0];
        render(
            <BrowserRouter>
                <ReservationForm />
            </BrowserRouter>
        );

        const dateInput = screen.getByLabelText(/choose date/i);

        expect(dateInput).toHaveValue(todaysDate);
    });

    test("time slots still appear after a new date is selected", async () => {
        const date = new Date();
        date.setDate(date.getDate() + 1);
        const tomorrowsDate = date.toISOString().split('T')[0];
        render(
            <BrowserRouter>
                <ReservationForm />
            </BrowserRouter>
        );

        const dateInput = screen.getByLabelText(/choose date/i);
        const timeInput = screen.getByRole('combobox', { name: /choose time/i });

        await act(async () => {
            fireEvent.focus(dateInput);
            fireEvent.change(dateInput, { target: { value: tomorrowsDate } });
        });

        expect(timeInput.length).toBeGreaterThan(1); // TODO: potentially not a realistic expectation
    });

    test("form is not submitted when no data is filled in", async () => {
        const handleSubmit = jest.fn();
        render(
            <BrowserRouter>
                <ReservationForm onSubmit={handleSubmit} />
            </BrowserRouter>
        );

        const submitButton = screen.getByRole('button', { name: /make your reservation/i });

        await act(async () => {
            fireEvent.click(submitButton);
        });

        expect(handleSubmit).not.toHaveBeenCalled();
    });

    test("form is submitted when valid data is filled out", async () => {
        const handleSubmit = jest.fn();
        const nameValue = "Testing";
        const emailAddressValue = "testing@gmail.com";

        render(
            <BrowserRouter>
                <ReservationForm onSubmit={handleSubmit} />
            </BrowserRouter>
        );

        const nameInput = screen.getByRole('textbox', { name: /your name/i });
        const emailAddressInput = screen.getByRole('textbox', { name: /your email address/i });
        const submitButton = screen.getByRole('button', { name: /make your reservation/i });

        await act(async () => {
            fireEvent.change(nameInput, { target: { value: nameValue } });
            fireEvent.change(emailAddressInput, { target: { value: emailAddressValue } });
            fireEvent.click(submitButton);
        });

        expect(handleSubmit).toHaveBeenCalled();
    });
});
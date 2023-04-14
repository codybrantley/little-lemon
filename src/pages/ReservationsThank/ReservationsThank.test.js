import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import ReservationsThank from './ReservationsThank';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('Reservation Thank You Page', () => {
    test("redirection happens when no state is defined", async () => {
        render(
            <BrowserRouter>
                <ReservationsThank />
            </BrowserRouter>
        );

        expect(mockNavigate).toHaveBeenCalled();
    });

    test("page is shown when state is defined", async () => {
        const formData = {
            date: "04/12/2023",
            time: '07:00 PM',
            guests: 1,
            occasion: 'Night Out',
            tablePreferences: '',
            name: 'Testing Person',
            emailAddress: 'testing@test.com',
        };

        render(
            <MemoryRouter initialEntries={[{ state: formData }]}>
                <ReservationsThank />
            </MemoryRouter>
        );

        const heading = screen.getByRole('heading', { name: /your reservation is set\./i });

        expect(heading).toBeInTheDocument();
    });
});
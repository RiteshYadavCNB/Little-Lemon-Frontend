import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

describe('Booking Form', () => {
  it ('renders booking form', () => {
    render(<BookingForm />);
    expect(screen.getByLabelText(/Pick Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByText(/Make Reservation/i)).toBeInTheDocument();
  });

  it('should update name field on user input', () => {
    render(<BookingForm/>);

    const dateInput = screen.getByLabelText(/Pick Date/i);
    fireEvent.change(dateInput, {target: {value: '2024-10-05'}});

    expect(dateInput.value).toBe('2024-10-05');
  })

  it('should on submit close fomr', ()=> {
    fireEvent.click(screen.getByText(/Make Reservation/i))
  })
});
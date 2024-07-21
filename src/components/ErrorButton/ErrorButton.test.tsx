import ErrorButton from './ErrorButton';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Error Button', () => {
    it('renders correctly', () => {
        render(<ErrorButton />);

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('contains right text', () => {
        render(<ErrorButton />);

        expect(screen.getByText('Error')).toBeInTheDocument();
    });

    it('should throw an error when clicked twice', () => {
        const consoleError = vi
            .spyOn(console, 'error')
            .mockImplementation(() => {});

        const renderWithError = () => {
            render(<ErrorButton />);
            fireEvent.click(screen.getByText('Error'));
        };

        expect(() => {
            renderWithError();
        }).toThrow('Test error to catch it');

        consoleError.mockRestore();
    });
});

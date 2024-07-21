import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader', () => {
    it('Renders correctly', () => {
        render(<Loader />);

        expect(screen.getByRole('img')).toBeInTheDocument();
    });
});

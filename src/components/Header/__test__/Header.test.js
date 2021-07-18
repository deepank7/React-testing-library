import { render, screen } from '@testing-library/react';
import Header from '../Header'

it('should render same text passed into title prop', () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
});

it('should render same text passed into title prop using getByRole', () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
});

it('should render same text passed into title prop using getByTitle', () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByTitle("Header");
    expect(headingElement).toBeInTheDocument();
});

it('should render same text passed into title prop using getAllByRole', async() => {
    render(<Header title="My Header" />);
    const headingElements = screen.getAllByRole("heading");
    expect(headingElements.length).toBe(1);
});
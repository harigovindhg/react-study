import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Contact from '../Contact';

describe('Contact Page Test cases', () => {
    it("Should load Heading inside 'Contact' component", () => {    // 'it' and 'test' are interchangeable
        render(<Contact />);        // Renders the Contact component onto the jsdom

        const heading = screen.getByRole('heading');
        // Assertion
        expect(heading).toBeInTheDocument();
    });

    test("Should load Button inside 'Contact' component", () => {
        render(<Contact />);        // Renders the Contact component onto the jsdom

        const button = screen.getByRole('button');
        // Assertion
        expect(button).toBeInTheDocument();
    });

    test("Should load input inside 'Contact' component", () => {
        render(<Contact />);        // Renders the Contact component onto the jsdom

        const input = screen.getByPlaceholderText('Name');
        // Assertion
        expect(input).toBeInTheDocument();
    });

    test("Should load 2 inputs inside 'Contact' component", () => {
        // Rendering
        render(<Contact />);        // Renders the Contact component onto the jsdom

        // Querying
        const inputBoxes = screen.getAllByRole('textbox');  // returns an array of JSX elements/React Fiber nodes/Virtual DOM Objects/React Elements

        // Assertion
        expect(inputBoxes.length).toBe(3);
    });
});

import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

// Add the cleanup statement
afterEach(cleanup);

// Add the describe function to declare what this test suite will be testing
describe('Nav componet', () => {
    //baseline test
    it('renders', () => {
        render(<Nav />);
    });

    //snapshot test
    it('mathces snapshot', () => {
        const { asFragment } = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
    });
});

// Test if the camera emoji is visible
describe('emojo is visible', () => {
    it('insert emoji into the h2', () => {
        //arrange
        const { getByLabelText } = render(<Nav />);

        //assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

// Test for Link Visibility
describe('links are visible', () => {
    it('inserts text into the link', () => {
        //arrange
        const { getByTestId } = render(<Nav />);

        //assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
});
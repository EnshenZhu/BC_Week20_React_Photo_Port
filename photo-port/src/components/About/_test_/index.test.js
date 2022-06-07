import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from "..";

// Add the cleanup statement
afterEach(cleanup);

// Add the describe function to declare what this test suite will be testing
describe('About componet', () => {
    //First Test
    it('renders', () => {
        render(<About />);
    });

    //Second Test
    it('matches snapshot DOM node structure', () => {
        //render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
});
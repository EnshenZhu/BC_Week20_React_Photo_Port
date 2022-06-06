import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

// Add the cleanup statement
afterEach(cleanup);

// Add the describe function to declare what this test suite will be testing
describe('Nav componet', () => (
    //baseline test
    it('renders', () => {
        render(<Nav />);
    })

    //snapshot test
));
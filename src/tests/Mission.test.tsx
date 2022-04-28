import React from 'react';
import { render, screen } from '@testing-library/react';
import Mission from '../routes/Mission';
import { ThemeContext } from '../libs/context/themeContext';
import { IsMissionInterface, IsThemeContextInterface } from '../libs/context/Interface';

export const MockedContextValues = (): IsThemeContextInterface => {
    const setLightTheme = jest.fn();
    const setName= jest.fn();
    return {
        lightTheme: true,
        setLightTheme, 
        name: "julia", 
        setName 
    }
}

test('renders learn react link', () => {
    const setLightTheme = jest.fn();
    const setName= jest.fn();
    const values = MockedContextValues();
    render(
    <ThemeContext.Provider value={values}>
        <Mission />
    </ThemeContext.Provider>
    );

    //assertions
    const titleElement = screen.getByText(/julia/i);
    expect(titleElement).toBeInTheDocument();
  });


import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from '../pages/signup/SignUp'
import '@testing-library/jest-dom'

let component = null;

beforeEach(() => {
    component = render(<Router><SignUp /></Router>)
    expect(component.container).toBeInTheDocument();
})

test('Renderized component', () => {
    component = render(<Router><SignUp /></Router>);
    expect(component.container).toBeInTheDocument();
});

test('Testing component', () => {
    expect(screen).toBeDefined();
});

describe('Renderized text from Login redirect', () => {
    test('Renderized text from Login alreadyAcc', () => {
        expect(component.getByText('¿Ya tienes una cuenta?')).toBeInTheDocument();
    });
    test('Renderized text from Login sign in', () => {
        expect(component.getByText('Iniciar Sesión')).toBeInTheDocument();
    });
});

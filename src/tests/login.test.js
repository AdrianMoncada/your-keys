import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup, fireEvent, act } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';

let component = null;

beforeEach(() => {
    component = render(<Router><Login /></Router>)
    expect(component.container).toBeInTheDocument();
})

test('Renderized component', () => {
    component = render(<Router><Login /></Router>);
    expect(component.container).toBeInTheDocument();
});

test('Testing component', () => {
    expect(screen).toBeDefined();
});

describe('Form Inputs Function', () => {

    test('Name input has to be empty and accept text', () => {
        const nameInput = component.container.querySelector('input[name="user"]')
        expect(nameInput.value).toBe('');
        fireEvent.change(nameInput, { target: { value: 'testing' } })
        expect(nameInput.value).toMatch('testing');
    });

    test('Password input has to be empty and accept text', () => {
        const passInput = component.container.querySelector('input[name="password"]')
        expect(passInput.value).toBe('');
        fireEvent.change(passInput, { target: { value: 'testing' } })
        expect(passInput.value).toMatch('testing');
    });

});

test('Renderized text from Login', () => {
    expect(component.getByText('Ingresar')).toBeInTheDocument();
});

describe('Renderized text from SignUp redirect', () => {
    test('Renderized text from SignUp noAcc', () => {
        expect(component.getByText('¿No tienes cuenta?')).toBeInTheDocument();
    });
    test('Renderized text from SignUp Register', () => {
        expect(component.getByText('Registrate')).toBeInTheDocument();
    });
});
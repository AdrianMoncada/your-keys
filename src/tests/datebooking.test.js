import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DateBooking from '../components/dateBooking/DateBooking'

let component = null;

test('Renderized component', () => {
    component = render(<Router><DateBooking /></Router>);
    expect(component.container).toBeInTheDocument();
});

test('Testing component', () => {
    expect(screen).toBeDefined();
});

/*test('Renderized text from delivery date', () => {
    expect(screen.getAllByText('Entrega'));
});

test('Renderized icons', () => {
    const {container} = render(<Calendar />);
    const icons = container.getElementsByClassName('icon');
    expect(icons.length).toBe(2);
});*/

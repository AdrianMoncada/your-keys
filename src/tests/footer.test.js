import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from '../components/footer/Footer';

let component = null;

beforeEach(() => {
    component = render(<Router><Footer /></Router>)
    expect(component.container).toBeInTheDocument();
})

test('Renderized component', () => {
    component = render(<Router><Footer /></Router>);
    expect(component.container).toBeInTheDocument();
});

test('Testing component', () => {
    expect(screen).toBeDefined();
});

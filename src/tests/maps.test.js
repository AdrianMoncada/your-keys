import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Maps from '../components/maps/maps';

let component = null;

test('Renderized component', () => {
    component = render(<Router><Maps /></Router>);
    expect(component.container).toBeInTheDocument();
});

test('Testing component', () => {
    expect(screen).toBeDefined();
});

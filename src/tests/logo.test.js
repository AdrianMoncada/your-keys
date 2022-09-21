import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Logo from '../components/logo/Logo';

let component = null;

test('Renderized component', () => {
    component = render(<Router><Logo /></Router>);
    expect(component.container).toBeInTheDocument();
});

test('Testing component', () => {
    expect(screen).toBeDefined();
});

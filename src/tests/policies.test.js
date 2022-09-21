import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Policies from '../components/policies/Policies';

let component = null;

test('Renderized component', () => {
    component = render(<Router><Policies /></Router>);
    expect(component.container).toBeInTheDocument();
});

test('Testing component', () => {
    expect(screen).toBeDefined();
});
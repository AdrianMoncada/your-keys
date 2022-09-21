import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginTitle from '../components/Login/Title/Title';

let component = null;

test('Renderized component', () => {
    component = render(<Router><LoginTitle /></Router>);
    expect(component.container).toBeInTheDocument();
});

test('Testing component', () => {
    expect(screen).toBeDefined();
});

test('Has a title-label class', () => {
    const {container} = render(<LoginTitle />);
    const label = container.getElementsByClassName('title-label');
    expect(label.length).toBe(1);
});
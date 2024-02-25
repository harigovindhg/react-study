import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';

it('Should load Header component with a Login button', () => {
    render(
        // We will wrap with a BrowserRouter, since Jest is not aware of react-router-dom
        <BrowserRouter>
            {/* We will wrap the entire Header in a Provider since Header uses Redux slices and Redux Store, which Jest is not aware of */}
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // const loginButton = screen.getByRole('link', { name: 'Login' });     // We can specify which link we want by mentioning the name tag as the second parameter in an object
    const loginButton = screen.getByText('Login');

    expect(loginButton).toBeInTheDocument();
});

it('Should load Header component with Cart icon and 0 items', () => {
    render(
        // We will wrap with a BrowserRouter, since Jest is not aware of react-router-dom
        <BrowserRouter>
            {/* We will wrap the entire Header in a Provider since Header uses Redux slices and Redux Store, which Jest is not aware of */}
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartLink = screen.getByRole('link', { name: '🛒 0' });

    expect(cartLink).toBeInTheDocument();
});

it('Should load Header component with Cart icon (atleast)', () => {
    render(
        // We will wrap with a BrowserRouter, since Jest is not aware of react-router-dom
        <BrowserRouter>
            {/* We will wrap the entire Header in a Provider since Header uses Redux slices and Redux Store, which Jest is not aware of */}
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartIcon = screen.getByRole('link', { name: /🛒/ });      //Regex are also allowed

    expect(cartIcon).toBeInTheDocument();
});

it('Should change Login button to Logout on click', () => {
    render(
        // We will wrap with a BrowserRouter, since Jest is not aware of react-router-dom
        <BrowserRouter>
            {/* We will wrap the entire Header in a Provider since Header uses Redux slices and Redux Store, which Jest is not aware of */}
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByText('Login');
    fireEvent.click(loginButton);
    fireEvent.click(loginButton);
    fireEvent.click(loginButton);
    expect(loginButton).toHaveTextContent('Logout');
});
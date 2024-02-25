import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import Cart from '../Cart';
import RestaurantDetails from "../RestaurantDetails";
import MOCK_DATA from '../mock/resMenuData_mock.json';
import appStore from "../../utils/appStore";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
);

it('Should load restaurant menu component', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantDetails />
                <Cart />
            </Provider>
        </BrowserRouter>
    ));

    // Get first accordion and click on it
    const categoryAccordion = screen.getByTestId('Leon Gourmet ( Burgers and Sides )_undefined');
    fireEvent.click(categoryAccordion);

    // Get all items under first accordion
    const restItems = screen.getAllByTestId('rest-item');
    expect(restItems.length).toBe(11);

    // get all ADD buttons in item list, and click on first and second button
    const addBtns = screen.getAllByRole('button', { name: 'ADD +' });
    fireEvent.click(addBtns[0]);
    fireEvent.click(addBtns[1]);

    // check whether the cart label in header has updated
    expect(screen.getByRole('link', { name: '🛒 2' })).toBeInTheDocument();

    //Assert that cart contains 2 items
    expect(screen.getAllByTestId('cart-item').length).toBe(2);

    //Assert that cart has no items after clear cart is clicked
    const clearCartBtn = screen.getByRole('button', { name: 'CLEAR CART' });
    fireEvent.click(clearCartBtn);
    expect(screen.getByTestId('cart-label')).toHaveTextContent(/^Cart is Empty \:\(Add some delicious food from restaurants!$/);
});

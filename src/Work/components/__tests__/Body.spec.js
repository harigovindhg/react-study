import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Body from '../Body';
import MOCK_DATA from '../mock/resListData_mock.json'
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';;

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

// Jest Helper functions
// beforeAll(() => {
//     console.log('Before All');
// });

// beforeEach(() => {
//     console.log('Before Each');
// });

// afterEach(() => {
//     console.log('After Each');
// });

// afterAll(() => {
//     console.log('After All');
// });

it('Should render the Body component with the Search button', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));
    const searchField = screen.getByPlaceholderText('Search for your favourite dishes');
    const searchButton = screen.getByRole('button', { name: 'Search' });
    fireEvent.change(searchField, { target: { value: 'Pizza' } });
    fireEvent.click(searchButton);
    expect(searchButton).toBeInTheDocument();
});

it('Should perform search with "Pizza"', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));
    const cardListBeforeSearch = screen.getAllByTestId('restCard');
    expect(cardListBeforeSearch.length).toBe(20);
    const searchField = screen.getByPlaceholderText('Search for your favourite dishes');
    const searchButton = screen.getByRole('button', { name: 'Search' });
    fireEvent.change(searchField, { target: { value: 'Pizza' } });
    fireEvent.click(searchButton);
    const cardListAfterSearch = screen.getAllByTestId('restCard');
    expect(cardListAfterSearch.length).toBe(2);
});

it('Should filter all top rated restaurants (Rated 4 and above)', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));
    const cardListBeforeFilter = screen.getAllByTestId('restCard');
    expect(cardListBeforeFilter.length).toBe(20);
    const topRatedButton = screen.getByRole('button', { name: 'Top Rated' });
    fireEvent.click(topRatedButton);
    const cardListAfterFilter = screen.getAllByTestId('restCard');
    expect(cardListAfterFilter.length).toBe(17);
})
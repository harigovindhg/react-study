import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../Card';
import { withOpenLabel } from '../Card'
import MOCK_DATA from '../mock/resCardData_mock.json';

it('Should render Card with props data', () => {
    render(
        <Card info={MOCK_DATA} />
    )
    const restName = screen.getByText('BOX8 - Desi Meals');
    expect(restName).toBeInTheDocument();
});

it('Should render Card with "Open" label (Testing Higher-Order Components)', () => {
    const HigherOrderCard = withOpenLabel(Card);
    render(
        <HigherOrderCard info={MOCK_DATA} />
    )
    const openLabel = screen.getByText('Open');
    expect(openLabel).toBeInTheDocument();
});
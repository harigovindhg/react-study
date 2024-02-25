import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../Card';
import MOCK_DATA from '../mock/resCardData_mock.json';

it('Should render Card with props data', () => {
    render(
        <Card info={MOCK_DATA} />
    )
});
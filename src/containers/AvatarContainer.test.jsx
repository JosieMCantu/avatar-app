import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, screen, getByText} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';
import AvatarContainer from '../containers/AvatarContainer';
import CharacterDetail from '../components/presentational/CharacterDetail';
import testingData from '../fixtures/testingData.json';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
    rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
        return res(ctx.json(testingData))
    })
)

describe('Avatar Container Test', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('renders a container to the screen', async () => {
        render(<MemoryRouter><AvatarContainer /></MemoryRouter>)
        screen.getByText('Loading...')

        const ul = await screen.findByRole('list', {name: 'characters'});
        expect(ul).not.toBeEmptyDOMElement();

        //image
        //click

    })
})
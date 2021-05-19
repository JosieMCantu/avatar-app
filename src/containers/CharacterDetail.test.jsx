import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, screen, getByText, waitFor} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';
import { BrowserRouter as Router, Route, MemoryRouter, } from 'react-router-dom';
import AvatarDetailContainer from './AvatarDetailContainer';


const server = setupServer(
    rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters/5cf5679a915ecad153ab68d9', (req, res, ctx) => {
        return res(ctx.json({
            "_id": "5cf5679a915ecad153ab68d9",
            "allies": [
                "Wan"
            ],
            "enemies": [
                "Jaya"
            ],
            "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/7/76/Aye-aye_spirit.png/revision/latest?cb=20131019224533",
            "name": "Aye-aye spirit",
            "affiliation": "Spirit World"
        }))
    })
)

describe('Avatar Container Test', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('renders a container to the screen', async () => {
        render(
            <MemoryRouter initialEntries={['/5cf5679a915ecad153ab68d9']}>
                <Route path='/:id'>
                    <AvatarDetailContainer />
                </ Route>
            </MemoryRouter>
        );

        const detail = await screen.findByRole('list', {name: 'character'});
        expect(detail).toMatchSnapshot();
        return waitFor(() => {
            screen.getByAltText('Aye-aye spirit');
            screen.getByText('Spirit World');
          })

    })
})
import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, screen, getByText} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';
import AvatarContainer from '../containers/AvatarContainer';

describe('Avatar Container Test', () => {
    it('renders a container to the screen', () => {
        render(<AvatarContainer />)
    })
})
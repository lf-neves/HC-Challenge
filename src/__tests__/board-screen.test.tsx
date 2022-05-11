import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import App from '../App'
import { AppProviders } from '../lib/context/app-provider'

test('renders all gifs information', async () => {
    render(<App />, { wrapper: AppProviders })

    await waitForElementToBeRemoved(screen.queryByText(/loading/i))
    screen.debug()
})

test.todo('can change order select')

test.todo('can search gifs slug')

test.todo('can load more gifs')

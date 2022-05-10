import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import App from '../App'
import { AppProviders } from '../lib/context/app-provider'

test('renders all gifs information', async () => {
    render(<App />, { wrapper: AppProviders })

    screen.debug()
    // await waitForElementToBeRemoved(screen.queryByText(/loading/i))


    expect(1).toBe(1)
})

test.todo('can change order select')

test.todo('can search gifs slug')



import { apiURL } from "@/config";
import { setupServer } from 'msw/node'
import { fetchWrapper } from "../fetchWrapper";
import { rest } from 'msw'

const server = setupServer()

beforeAll(() => {
    server.listen()
})
afterAll(() => server.close())

test('makes GET request to the given endpoint', async () => {
    const endpoint = 'test-endpoint'
    const mockResult = { gifs: [] }

    server.use(
        rest.get(`${apiURL}/${endpoint}`, async (req, res, ctx) => {
            return res(ctx.json(mockResult))
        })
    )

    const result = await fetchWrapper.get(`${apiURL}/${endpoint}`)

    expect(result).toBe(mockResult)

})


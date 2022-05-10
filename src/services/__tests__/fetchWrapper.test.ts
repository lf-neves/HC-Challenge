import { apiURL } from "@/config";
import { setupServer } from 'msw/node'
import { fetchWrapper } from "../fetchWrapper";
import { rest } from 'msw'
import fetchMock from "jest-fetch-mock"

const server = setupServer()

beforeAll(() => server.listen())
afterAll(() => server.close())

test('makes GET request to the given endpoint', async () => {

    fetchMock.dontMock()

    const endpoint = 'test-endpoint'
    const mockResult = { gifs: [] }

    server.use(
        rest.get(`${apiURL}/${endpoint}`, async (req, res, ctx) => {
            return res(ctx.json(mockResult))
        })
    )

    const result = await fetchWrapper.get(`${apiURL}/${endpoint}`)

    expect(result).toEqual(mockResult)

})

test('correctly rejects the promise if there is an error', async () => {

    fetchMock.dontMock()

    const endpoint = `${apiURL}/test-endpoint`
    const testError = { message: 'Test error' }
    server.use(
        rest.get(endpoint, async (req, res, ctx) => {
            return res(ctx.status(400), ctx.json(testError))
        }),
    )

    await expect(fetchWrapper.get(endpoint)).rejects.toEqual(new Error(testError.message))
})


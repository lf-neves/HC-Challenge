import { Dict } from '@chakra-ui/utils'

export const fetchWrapper = {
    get,
    post,
    postFile: post_file,
    put,
    softDelete,
    delete: _delete,
}

async function get(url: string) {
    const requestOptions: RequestInit = {
        method: 'GET',
    }

    return window.fetch(url, requestOptions).then(handleResponse)
}

async function post(url: string, body: Dict) {
    const requestOptions: RequestInit = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        credentials: 'include',
    }
    return fetch(url, requestOptions).then(handleResponse)
}

async function post_file(url: string, body: FormData) {
    const requestOptions: RequestInit = {
        method: 'POST',
        body,
        credentials: 'include',
    }
    return fetch(url, requestOptions).then(handleResponse)
}

async function put(url: string, body: Dict) {
    const requestOptions: RequestInit = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        credentials: 'include',
    }
    return fetch(url, requestOptions).then(handleResponse)
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(url: string) {
    const requestOptions: RequestInit = {
        method: 'DELETE',
        credentials: 'include',
    }
    return fetch(url, requestOptions).then(handleResponse)
}

async function softDelete(url: string, body: Dict) {
    const requestOptions: RequestInit = {
        method: 'DELETE',
        body: JSON.stringify(body),
        credentials: 'include',
    }
    return fetch(url, requestOptions).then(handleResponse)
}

async function handleResponse(response: Response) {
    const responseText = await response.text()
    const data = responseText && JSON.parse(responseText)

    if (!response.ok) {
        const error = (data && data.message) || response.statusText
        throw new Error(error)
    }

    return data
}

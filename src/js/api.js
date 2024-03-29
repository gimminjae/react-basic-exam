const apiClient = {
    makeQueryParam(param) {
        let queryString = ''
        for (const [key, value] of Object.entries(param)) {
            if (key && value !== undefined && value !== null) {
                queryString += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`;
              }
        }
        queryString = queryString.slice(0, -1);

        return queryString;
    },
    request(url, data, option) {
        const options = {
            method: option.method,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                ...option.headers
            },
            referrerPolicy: 'no-referrer',
            body: option.method !== 'GET' ? JSON.stringify(data) : null
        }
        const result = fetch(url, options).then((res) => res.json())
        return result
    },
    get(url, parameter, option) {
        return this.request(`${url}?${parameter ? this.makeQueryParam(parameter) : ''}`, null, { ...option, method: 'GET'})
    },
    post(url, data, option) {
        return this.request(url, data, { ...option, method: 'POST'})
    },
    put(url, parameter, data, option) {
        return this.request(`${url}?${parameter ? this.makeQueryParam(parameter) : ''}`, data, { ...option, method: 'PUT'})
    },
    patch(url, parameter, data, option) {
        return this.request(`${url}?${parameter ? this.makeQueryParam(parameter) : ''}`, data, { ...option, method: 'PATCH'})
    },
    delete(url, parameter, option) {
        return this.request(`${url}?${parameter ? this.makeQueryParam(parameter) : ''}`, null, { ...option, method: 'DELETE'})
    },
}

export default apiClient
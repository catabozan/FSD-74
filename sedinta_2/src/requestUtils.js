const formatResponse = (data) => {
    let responseData = {
        data: data ?? null
    }

    return responseData
}

const formatErrorResponse = (text) => {
    let responseData = {
        error: text
    }

    return responseData
}

export {
    formatErrorResponse,
    formatResponse
}
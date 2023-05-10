//GET
exports.getId = {
    primeiroIdSuccess: {
        id: 1,
        responseBody: {
                id: 1,
                title: "Activity 1",
                dueDate: "2023-05-10T15:35:15.5389779+00:00",
                completed: false
        }
    },

    primeiroIdError: {
        id: "test",
        responseBody: {
                id: 1,
                title: "Activity 2",
                dueDate: "2023-05-10T15:35:15.5389779+00:00",
                completed: false
        }
    },

    headers: {
        apiSupportedVersions: 1.0, 
        contentType: "application/json", 
        charset: "utf-8", 
        v: 1.0, 
        date: "Wed10 May 2023 13:35:14 GMT", 
        server: "Kestrel", 
        transferEncoding: "chunked"
    }
}

//DELETE
exports.deleteId = {
    primeiroIdSuccess: {
        id: 1
    },
    primeiroIdError: {
        id: "@"
    },

    headers: {
        accessControlAllowOrigin: "*", 
        apiSupportedVersions: 1.0, 
        contentLength: 0,
        date: "Wed10 May 2023 15:02:46 GMT", 
        server: "Kestrel"
    }
}

//POST

exports.postPayload = {
    payload: {
        id: 0,
        title: "string",
        dueDate: "2023-05-10T15:07:10.002Z",
        completed: true
    },

    responseBody: {
        id: 0,
        title: "string",
        dueDate: "2023-05-10T15:07:10.002Z",
        completed: true
    },

    payloadError: {
        "title": "string",
        "dueDate": "202310T15:15:37.31",
        "comple": true
    },

    responseBodyError: {
        "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
        "title": "One or more validation errors occurred.",
        "status": 400,
        "traceId": "00-6760ad2986f22d4ea3fc69f94a98b6c0-2fb76e76d5122147-00",
        "errors": {
          "": [
            "A non-empty request body is required."
          ]
        }
    },

    headers: {
        accessControlAllowOrigin: "*",
        apiSupportedVersions: 1.0, 
        contentType: "application/json", 
        charset: "utf-8", 
        v: 1.0, 
        date: "Wed10 May 2023 15:12:01 GMT", 
        server: "Kestrel", 
        transferEncoding: "chunked"
    }
}

//PUT

exports.put = {
    payload: {
        id: 0,
        body: {
            "id": 0,
            "title": "string",
            "dueDate": "2023-05-10T15:15:37.319Z",
            "completed": true
        }
    },

    responseBody: {
        "id": 0,
        "title": "string",
        "dueDate": "2023-05-10T15:15:37.319Z",
        "completed": true
    },

    payloadError: {
        id: "@",
        body: {
            "title": "string",
            "dueDate": "2023-05-10T15:15:37.319Z",
            "completed": true
        }
    },

    responseBodyError: {
        "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
        "title": "One or more validation errors occurred.",
        "status": 400,
        "traceId": "00-6760ad2986f22d4ea3fc69f94a98b6c0-2fb76e76d5122147-00",
        "errors": {
          "": [
            "A non-empty request body is required."
          ]
        }
    },

    headers: {
        accessControlAllowOrigin: "*",
        apiSupportedVersions: 1.0, 
        contentType: "application/json", 
        charset: "utf-8", 
        v: 1.0, 
        date: "Wed10 May 2023 15:12:01 GMT", 
        server: "Kestrel", 
        transferEncoding: "chunked"
    }
}
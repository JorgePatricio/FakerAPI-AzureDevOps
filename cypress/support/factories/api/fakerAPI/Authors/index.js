//GET
exports.getId = {
    primeiroIdSuccess: {
        id: 3,
        responseBody: {
            "id": 3,
            "idBook": 2,
            "firstName": "First Name 3",
            "lastName": "Last Name 3"
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

exports.getIdBooks = {
    primeiroIdSuccess: {
        id: 2,
        responseBody: [
            {
              "id": 4,
              "idBook": 2,
              "firstName": "First Name 4",
              "lastName": "Last Name 4"
            },
            {
              "id": 5,
              "idBook": 2,
              "firstName": "First Name 5",
              "lastName": "Last Name 5"
            }
        ]
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
},

//POST

exports.postPayload = {
    payload: {
        "id": 0,
        "idBook": 0,
        "firstName": "string",
        "lastName": "string"
    },

    responseBody: {
        "id": 0,
        "idBook": 0,
        "firstName": "string",
        "lastName": "string"
    },

    payloadError: {
        "id": "y",
        "lastName": "string"
      },

    responseBodyError: {
        "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
        "title": "One or more validation errors occurred.",
        "status": 400,
        "traceId": "00-0f318fcc5a4a8947927d0da31945eb91-f63b6ba2f7668447-00",
        "errors": {
          "$.id": [
            "The JSON value could not be converted to System.Int32. Path: $.id | LineNumber: 0 | BytePositionInLine: 9."
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
        id: 9,
        body: {
            "id": 1,
            "idBook": 4,
            "firstName": "Jorge",
            "lastName": "Patricio"
        }
    },

    responseBody: {
        "id": 1,
        "idBook": 4,
        "firstName": "Jorge",
        "lastName": "Patricio"
    },

    payloadError: {
        id: "@",
        body: {
            "id": "@",
            "idBook": 4,
            "firstName": "Jorge",
            "lastName": "Patricio"
        }
    },

    responseBodyError: {
        "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
        "title": "One or more validation errors occurred.",
        "status": 400,
        "traceId": "00-053a1cabc380304c83183a35e6212c4a-f0841aa798792b44-00",
        "errors": {
          "$.id": [
            "The JSON value could not be converted to System.Int32. Path: $.id | LineNumber: 0 | BytePositionInLine: 9."
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
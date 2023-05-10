
class Books {
    getBooks() {
        return cy.request({
            method: "GET",
            url: `${Cypress.env("FakerAPI")}/api/v1/Books`,
            failOnStatusCode: false
        })
    }

    postBooks(payload) {
        return cy.request({
            method: "POST",
            url: `${Cypress.env("FakerAPI")}/api/v1/Books`,
            failOnStatusCode: false,
            body: payload
        })
    }

    getBooks(id) {
        return cy.request({
            method: "GET",
            url: `${Cypress.env("FakerAPI")}/api/v1/Books/${id}`,
            failOnStatusCode: false
        })
    }

    putBooks(id, payload) {
        return cy.request({
            method: "PUT",
            url: `${Cypress.env("FakerAPI")}/api/v1/Books/${id}`,
            failOnStatusCode: false,
            body: payload
        })
    }

    deleteBooks(id) {
        return cy.request({
            method: "DELETE",
            url: `${Cypress.env("FakerAPI")}/api/v1/Books/${id}`,
            failOnStatusCode: false
        })
    }
}
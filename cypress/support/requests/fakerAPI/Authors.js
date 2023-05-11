/// <reference types="cypress" />

class Authors {
    getAuthors() {
        return cy.request({
            method: "GET",
            url: `${Cypress.env("FakerAPI")}/api/v1/Authors`,
            failOnStatusCode: false
        })
    }

    postAuthors(payload) {
        return cy.request({
            method: "POST",
            url: `${Cypress.env("FakerAPI")}/api/v1/Authors`,
            failOnStatusCode: false,
            body: payload
        })
    }

    getAuthorsBooks(idBook) {
        return cy.request({
            method: "GET",
            url: `${Cypress.env("FakerAPI")}/api/v1/Authors/authors/books/${idBook}`,
            failOnStatusCode: false
        })
    }

    getAuthorsId(id) {
        return cy.request({
            method: "GET",
            url: `${Cypress.env("FakerAPI")}/api/v1/Authors/${id}`,
            failOnStatusCode: false
        })
    }

    putAuthors(id, payload) {
        return cy.request({
            method: "PUT",
            url: `${Cypress.env("FakerAPI")}/api/v1/Authors/${id}`,
            failOnStatusCode: false,
            body: payload
        })
    }

    deleteAuthors(id) {
        return cy.request({
            method: "DELETE",
            url: `${Cypress.env("FakerAPI")}/api/v1/Authors/${id}`,
            failOnStatusCode: false
        })
    }
}

export default new Authors
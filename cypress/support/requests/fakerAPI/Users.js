/// <reference types="cypress" />

class Users {
    getUsers() {
        return cy.request({
            method: "GET",
            url: `${Cypress.env("FakerAPI")}/api/v1/Users`,
            failOnStatusCode: false
        })
    }

    postUsers(payload) {
        return cy.request({
            method: "POST",
            url: `${Cypress.env("FakerAPI")}/api/v1/Users`,
            failOnStatusCode: false,
            body: payload
        })
    }

    getUsers(id) {
        return cy.request({
            method: "GET",
            url: `${Cypress.env("FakerAPI")}/api/v1/Users/${id}`,
            failOnStatusCode: false
        })
    }

    putUsers(id, payload) {
        return cy.request({
            method: "PUT",
            url: `${Cypress.env("FakerAPI")}/api/v1/Users/${id}`,
            failOnStatusCode: false,
            body: payload
        })
    }

    deleteUsers(id) {
        return cy.request({
            method: "DELETE",
            url: `${Cypress.env("FakerAPI")}/api/v1/Users/${id}`,
            failOnStatusCode: false
        })
    }
}

export default new Users
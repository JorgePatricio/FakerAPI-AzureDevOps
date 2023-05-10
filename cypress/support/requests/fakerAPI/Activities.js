/// <reference types="cypress" />

class Activities {
    getActivities(){
        return cy.request({
            method: "GET",
            url: `${Cypress.env("FakerAPI")}/Activities`,
            failOnStatusCode: false
        })
    }

    postActivities(payload) {
        return cy.request({
            method: "POST",
            url: `${Cypress.env("FakerAPI")}/Activities`,
            failOnStatusCode: false,
            body: payload
        })
    }

    getActivitiesId(id) {
        return cy.request({
            method: "GET",
            url: `${Cypress.env("FakerAPI")}/Activities/${id}`,
            failOnStatusCode: false
        })
    }

    putActivities(id, payload) {
        return cy.request({
            method: "PUT",
            url: `${Cypress.env("FakerAPI")}/Activities/${id}`,
            failOnStatusCode: false,
            body: payload
        })
    }

    deleteActivities(id) {
        return cy.request({
            method: "DELETE",
            url: `${Cypress.env("FakerAPI")}/Activities/${id}`,
            failOnStatusCode: false
        })
    }
}

export default new Activities
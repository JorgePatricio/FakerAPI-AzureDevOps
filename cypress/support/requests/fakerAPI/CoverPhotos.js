
class CoverPhotos {
    getCoverPhotos() {
        return cy.request({
            method: "GET",
            url: `${Cypress.env("FakerAPI")}/api/v1/CoverPhotos`,
            failOnStatusCode: false
        })
    }

    postCoverPhotos(payload) {
        return cy.request({
            method: "POST",
            url: `${Cypress.env("FakerAPI")}/api/v1/CoverPhotos`,
            failOnStatusCode: false,
            body: payload
        })
    }

    getCoverPhotosBooks(idBook) {
        return cy.request({
            method: "GET",
            url: `${Cypress.env("FakerAPI")}/api/v1/api/v1/CoverPhotos/books/covers/${idBook}`,
            failOnStatusCode: false
        })
    }

    getCoverPhotos(id) {
        return cy.request({
            method: "GET",
            url: `${Cypress.env("FakerAPI")}/api/v1/CoverPhotos/${id}`,
            failOnStatusCode: false
        })
    }

    putCoverPhotos(id, payload) {
        return cy.request({
            method: "PUT",
            url: `${Cypress.env("FakerAPI")}/api/v1/CoverPhotos/${id}`,
            failOnStatusCode: false,
            body: payload
        })
    }

    deleteCoverPhotos(id) {
        return cy.request({
            method: "DELETE",
            url: `${Cypress.env("FakerAPI")}/api/v1/CoverPhotos/${id}`,
            failOnStatusCode: false
        })
    }
}
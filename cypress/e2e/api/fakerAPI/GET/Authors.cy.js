import Authors from "../../../../support/requests/fakerAPI/Authors"
import { getId } from "../../../../support/factories/api/fakerAPI/Authors"
import { getIdBooks } from "../../../../support/factories/api/fakerAPI/Authors"


describe("GET - Authors", () => {
    context("Validar retornos com sucesso", () => {
        it("Validar statuscode - GET", () => {
            Authors.getAuthors().should(response => {
                expect(response.status).to.eq(200)
                expect(response.headers.server).to.eq(getId.headers.server)
            })
        })

        it("Validar retorno de uma única chamada - GET", () => {
            Authors.getAuthorsId(getId.primeiroIdSuccess.id).should(response => {
                expect(response.status).to.eq(200)
                expect(response.headers.server).to.eq(getId.headers.server)
            })
        })

        it("Validar retorno de uma única chamada - GETBOOKS", () => {
            Authors.getAuthorsBooks(getIdBooks.primeiroIdSuccess.id).should(response => {
                expect(response.status).to.eq(200)
                expect(response.headers.server).to.eq(getIdBooks.headers.server)
            })
        })
    })

    context("Validar retornos com erro", () => {
        it("Validar retorno com erro enviando um id inválido - GET", () => {
            Authors.getAuthorsId(getId.primeiroIdError.id).should(response => {
                expect(response.status).to.eq(400)
                expect(response.headers.server).to.eq(getId.headers.server)
            })
        })

        it("Validar retorno com erro enviando um id inválido", () => {
            Authors.getAuthorsBooks(getIdBooks.primeiroIdError.id).should(response => {
                expect(response.status).to.eq(400)
                expect(response.headers.server).to.eq(getIdBooks.headers.server)
            })
        })
    })
})
import Authors from "../../../../support/requests/fakerAPI/Authors";
import { deleteId } from "../../../../support/factories/api/fakerAPI/Authors";

describe("DELETE - Authors", () => {
    context("Validar retornos com sucesso", () => {
        it("Validar status code", () => {
            Authors.deleteAuthors(deleteId.primeiroIdSuccess.id).should(response => {
                expect(response.status).to.eq(200)
            })
        })

        it("Validar headers da requisição", () => {
            Authors.deleteAuthors(deleteId.primeiroIdSuccess.id).should(response => {
                expect(response.headers.server).to.eq(deleteId.headers.server)
            })
        })
    })

    context("Validar retornos com erro", () => {
        it("Validar status code", () => {
            Authors.deleteAuthors(deleteId.primeiroIdError.id).should(response => {
                expect(response.status).to.eq(400)
            })
        })

        it("Validar headers da requisição", () => {
            Authors.deleteAuthors(deleteId.primeiroIdError.id).should(response => {
                expect(response.headers.server).to.eq(deleteId.headers.server)
            })
        })
    })
})
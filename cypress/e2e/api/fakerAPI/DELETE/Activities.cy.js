import Activities from "../../../../support/requests/fakerAPI/Activities";
import { deleteId } from "../../../../support/factories/api/fakerAPI/Activities";

describe("DELETE - Activities", () => {
    context("Validar retornos com sucesso", () => {
        it("Validar status code", () => {
            Activities.deleteActivities(deleteId.primeiroIdSuccess.id).should(response => {
                expect(response.status).to.eq(200)
            })
        })

        it("Validar headers da requisição", () => {
            Activities.deleteActivities(deleteId.primeiroIdSuccess.id).should(response => {
                expect(response.headers.server).to.eq(deleteId.headers.server)
            })
        })
    })

    context("Validar retornos com erro", () => {
        it("Validar status code", () => {
            Activities.deleteActivities(deleteId.primeiroIdError.id).should(response => {
                expect(response.status).to.eq(400)
            })
        })

        it("Validar headers da requisição", () => {
            Activities.deleteActivities(deleteId.primeiroIdError.id).should(response => {
                expect(response.headers.server).to.eq(deleteId.headers.server)
            })
        })
    })
})
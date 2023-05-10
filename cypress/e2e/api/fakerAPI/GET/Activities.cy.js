import Activities from "../../../../support/requests/fakerAPI/Activities";
import { getId } from "../../../../support/factories/api/fakerAPI/Activities";

describe("GET - Activities", () => {
    context("Validar retornos com sucesso", () => {
        it("Validar retorno SUCESSO - GET", () => {
            Activities.getActivities().should(response => {
                expect(response.status).to.eq(200)
                expect(response.headers.server).to.eq(getId.headers.server)
            })
        })

        it("Validar retorno de uma única chamada", () => {
            Activities.getActivitiesId(getId.primeiroIdSuccess.id).should(response => {
                expect(response.status).to.eq(200)
                expect(response.headers.server).to.eq(getId.headers.server)
            })
        })
    })

    context("Validar retornos com erro", () => {
        it("Validar retorno com erro enviando um id inválido", () => {
            Activities.getActivitiesId(getId.primeiroIdError.id).should(response => {
                expect(response.status).to.eq(400)
                expect(response.headers.server).to.eq(getId.headers.server)
            })
        })
    })
})
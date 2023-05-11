import Activities from "../../../../support/requests/fakerAPI/Activities"
import { put } from "../../../../support/factories/api/fakerAPI/Activities"

describe("PUT - Activities", ()=> {
    context("Validar retornos com sucesso", ()=> {
        it("Validar status code", ()=> {
            Activities.putActivities(put.payload.id, put.payload.body).should(response => {
                expect(response.status).to.eq(200)
            })
        })

        it("Validar headers", ()=> {
            Activities.putActivities(put.payload.id, put.payload.body).should(response => {
                expect(response.headers.server).to.eq(put.headers.server)
            })
        })

        it("Validar o body da requisição", ()=> {
            Activities.putActivities(put.payload.id, put.payload.body).should(response => {
                expect(response.body.id).to.eq(put.responseBody.id)
                expect(response.body.title).to.eq(put.responseBody.title)
                expect(response.body.completed).to.eq(put.responseBody.completed)
            })
        })
    })

    context("Validar retornos com erro", ()=> {
        it("Validar status code", ()=> {
            Activities.putActivities(put.payloadError.id, put.payloadError.body).should(response => {
                expect(response.status).to.eq(400)
            })
        })

        it("Validar headers", ()=> {
            Activities.putActivities(put.payloadError.id, put.payloadError.body).should(response => {
                expect(response.headers.server).to.eq(put.headers.server)
            })
        })

        it("Validar o body da requisição", ()=> {
            Activities.putActivities(put.payloadError.id, put.payloadError.body).should(response => {
                expect(response.body.type).to.eq(put.responseBodyError.type)
                expect(response.body.title).to.eq(put.responseBodyError.title)
                expect(response.body.status).to.eq(put.responseBodyError.status)
            })
        })
    })
})
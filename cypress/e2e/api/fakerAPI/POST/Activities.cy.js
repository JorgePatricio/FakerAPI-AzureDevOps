import Activities from "../../../../support/requests/fakerAPI/Activities";
import { postPayload } from "../../../../support/factories/api/fakerAPI/Activities";

describe("POST - Activities", ()=> {
    context("Validar retornos de sucesso", ()=> {
        it("Validar status code", ()=> {
            Activities.postActivities(postPayload.payload).should(response => {
                expect(response.status).to.eq(200)
            })
        })

        it("Validar headers", ()=> {
            Activities.postActivities(postPayload.payload).should(response => {
                expect(response.headers.server).to.eq(postPayload.headers.server)
            })
        })

        it("Validar o body da requisição", ()=> {
            Activities.postActivities(postPayload.payload).should(response => {
                expect(response.body.id).to.eq(postPayload.responseBody.id)
                expect(response.body.title).to.eq(postPayload.responseBody.title)
                expect(response.body.completed).to.eq(postPayload.responseBody.completed)
            })
        })
    })

    context("Validar retornos com erro", ()=> {
        it("Validar status code", ()=> {
            Activities.postActivities(postPayload.payloadError).should(response => {
                expect(response.status).to.eq(400)
            })
        })

        it("Validar headers", ()=> {
            Activities.postActivities(postPayload.payloadError).should(response => {
                expect(response.headers.server).to.eq(postPayload.headers.server)
            })
        })

        it("Validar o body da requisição", ()=> {
            Activities.postActivities(postPayload.payloadError).should(response => {
                expect(response.body.type).to.eq(postPayload.responseBodyError.type)
                expect(response.body.title).to.eq(postPayload.responseBodyError.title)
                expect(response.body.status).to.eq(postPayload.responseBodyError.status)
            })
        })
    })
})
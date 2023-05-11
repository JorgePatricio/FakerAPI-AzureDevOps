import Authors from "../../../../support/requests/fakerAPI/Authors";
import { postPayload } from "../../../../support/factories/api/fakerAPI/Authors";

describe("POST - Authors", ()=> {
    context("Validar retornos de sucesso", ()=> {
        it("Validar status code", ()=> {
            Authors.postAuthors(postPayload.payload).should(response => {
                expect(response.status).to.eq(200)
            })
        })

        it("Validar headers", ()=> {
            Authors.postAuthors(postPayload.payload).should(response => {
                expect(response.headers.server).to.eq(postPayload.headers.server)
            })
        })

        it("Validar o body da requisição", ()=> {
            Authors.postAuthors(postPayload.payload).should(response => {
                expect(response.body.id).to.eq(postPayload.responseBody.id)
                expect(response.body.idBook).to.eq(postPayload.responseBody.idBook)
                expect(response.body.firstName).to.eq(postPayload.responseBody.firstName)
                expect(response.body.lastName).to.eq(postPayload.responseBody.lastName)
            })
        })
    })

    context("Validar retornos com erro", ()=> {
        it("Validar status code", ()=> {
            Authors.postAuthors(postPayload.payloadError).should(response => {
                expect(response.status).to.eq(400)
            })
        })

        it("Validar headers", ()=> {
            Authors.postAuthors(postPayload.payloadError).should(response => {
                expect(response.headers.server).to.eq(postPayload.headers.server)
            })
        })

        it("Validar o body da requisição", ()=> {
            Authors.postAuthors(postPayload.payloadError).should(response => {
                expect(response.body.status).to.eq(postPayload.responseBodyError.status)
                expect(response.body.title).to.eq(postPayload.responseBodyError.title)
            })
        })
    })
})
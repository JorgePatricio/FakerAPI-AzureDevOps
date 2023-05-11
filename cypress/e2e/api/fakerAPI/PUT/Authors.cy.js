import Authors from "../../../../support/requests/fakerAPI/Authors"
import { put } from "../../../../support/factories/api/fakerAPI/Authors"

describe("PUT - Authors", ()=> {
    context("Validar retornos com sucesso", ()=> {
        it("Validar status code", ()=> {
            Authors.putAuthors(put.payload.id, put.payload.body).should(response => {
                expect(response.status).to.eq(200)
            })
        })

        it("Validar headers", ()=> {
            Authors.putAuthors(put.payload.id, put.payload.body).should(response => {
                expect(response.headers.server).to.eq(put.headers.server)
            })
        })

        it("Validar o body da requisição", ()=> {
            Authors.putAuthors(put.payload.id, put.payload.body).should(response => {
                expect(response.body.id).to.eq(put.responseBody.id)
                expect(response.body.idBook).to.eq(put.responseBody.idBook)
                expect(response.body.firstName).to.eq(put.responseBody.firstName)
                expect(response.body.lastName).to.eq(put.responseBody.lastName)
            })
        })
    })

    context("Validar retornos com erro", ()=> {
        it("Validar status code", ()=> {
            Authors.putAuthors(put.payloadError.id, put.payloadError.body).should(response => {
                expect(response.status).to.eq(400)
            })
        })

        it("Validar headers", ()=> {
            Authors.putAuthors(put.payloadError.id, put.payloadError.body).should(response => {
                expect(response.headers.server).to.eq(put.headers.server)
            })
        })

        it("Validar o body da requisição", ()=> {
            Authors.putAuthors(put.payloadError.id, put.payloadError.body).should(response => {
                expect(response.body.type).to.eq(put.responseBodyError.type)
                expect(response.body.title).to.eq(put.responseBodyError.title)
                expect(response.body.status).to.eq(put.responseBodyError.status)
            })
        })
    })
})
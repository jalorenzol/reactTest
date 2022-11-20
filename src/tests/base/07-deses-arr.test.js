import '@testing-library/jest-dom'
import { retornaArreglo } from '../../base/07-deses-arr'

describe("Prueba de 07-deses-arr", () => {
    test("test de retornaArreglo", () => {
        const arr = ['ABC', 123]
        expect(retornaArreglo()).toEqual(arr)
    })
})
import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string"

describe('Pruebas em 02-template-string.js', () => {
    test('Prueba en método getSaludo', () => {
         const nombre = 'Fernando'

         const saludo = getSaludo(nombre)

         expect(saludo).toBe('Hola ' + nombre)
    });
    test('Debe devolver Hola Carlos si no hay argumento', () => {

        const saludo = getSaludo()

        expect(saludo).toBe('Hola Carlos')
    })
})
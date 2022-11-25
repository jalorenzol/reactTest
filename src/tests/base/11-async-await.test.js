import '@testing-library/jest-dom'
import { getImagen } from '../../base/11-async-await'

describe("Pruebas a funciones asincronas", () => {
    test('Debe de retornar el url',async() =>{
     const url = await getImagen();
     const content = 'https://'
     expect(url.includes(content)).toBe(true)
    })
    
})
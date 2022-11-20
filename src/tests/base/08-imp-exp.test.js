import '@testing-library/jest-dom'
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp'
import heroes from '../../data/heroes'

describe("Pruebas a 08-imo-exp.js", () => {
    test("debe de retornar un heroe por id", () => {
        const id = 1
        const heroe = getHeroeById(id)

        const heroeData = heroes.find(h => h.id === id)

        expect(heroe).toEqual(heroeData)
    })
    test("debe retornar undefine si heroe con este ID no existe", () => {
        const id = 10

        const heroe = getHeroeById(id)

        expect(heroe).toBe(undefined)
    })
    test("debe devolver los heroes de DC", () => {
        const owner = "DC"

        const heroesDC = getHeroesByOwner(owner)

        const heroesData = heroes.filter(h => h.owner === owner)

        expect(heroesDC).toEqual(heroesData)

    })

    test("debe devolver un arreglo con los heroes de Marvel con tamaño 2", () => {

        const owner = "Marvel"

        const heroesMarvel = getHeroesByOwner(owner)

        expect(heroesMarvel.length).toBe(2)


    })
})
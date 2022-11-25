import '@testing-library/jest-dom'
import { getByText, render } from '@testing-library/react'
import PrimeraApp from '../PrimeraApp'
import React from 'react'

describe('Pruebas en <PrimeraApp />', () => {
    test('Debe de mostrar el mensaje Hola soy Jose', ()=> {
        const saludo = 'Hola soy Jose'
        const {getByText} = render(<PrimeraApp saludo={saludo} />)
        expect(getByText(saludo)).toBeInTheDocument()
    })
})
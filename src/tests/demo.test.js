describe('pruebas en el archivo demo.test.js', () => {
    test('deben de ser iguales los mensajes', () => {

        const mensajes = 'Hola mundo'
    
        const mensajes2 = `Hola mundo`
    
        expect(mensajes).toBe(mensajes2)
    
     })
})


import { renderHook } from "@testing-library/react-hooks"
import useFetch from "../../hooks/useFetch"

describe('Pruebas en el useFetch', () => { 


    test('Debe de retornar la información por defecto', () => { 

        const { result } = renderHook(()=> useFetch('https://www.breakingbadapi.com/api/quotes/1') )
        
        const {data, loading, error} = result.current

        expect( data ).toBe(null)
        expect( loading ).toBe(true)
        expect( error ).toBe(null)

     })

    test('Debe de retornar la información de la apeticion', async() => { 

        const { result, waitForNextUpdate } = renderHook(()=> useFetch('https://www.breakingbadapi.com/api/quotes/1') )
        
        await waitForNextUpdate()
        
        const {data, loading, error} = result.current

        
        expect( data.length > 0 ).toBe(true)
        expect( loading ).toBe(false)
        expect( error ).toBe(null)

     })


    test('Debe de menajar el errror', async() => { 

        const { result, waitForNextUpdate } = renderHook(()=> useFetch('https://reqres.in/api-ERROR/users?page=2') )
        
        await waitForNextUpdate()
        
        const {data, loading, error} = result.current

        
        expect( data ).toBe(null)
        expect( loading ).toBe(false)
        expect( error ).toBe('Error en la petición')

     })


 })
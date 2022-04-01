import { act, renderHook } from "@testing-library/react-hooks"
import useCounter from "../../hooks/useCounter"




describe('Pruebas del hook useCouter', () => { 


    test('Debe de roetornar valores por defecto', () => { 

        const { result } = renderHook(()=> useCounter() )
        
        expect( result.current.counter ).toBe( 10 )
        expect( typeof result.current.increment ).toBe( 'function' )
        expect( typeof result.current.decrement ).toBe( 'function' )
        expect( typeof result.current.reset ).toBe( 'function' )

     })

     test('Evaluar que el useCounter reciba el algumento que enviamos correctamente', () => { 

        const value = 100

        const { result } = renderHook( ()=> useCounter(value))

        expect( result.current.counter ).toBe( value )

      })

      test('Evaluar que useCounter incremente en 1', () => { 

        const value = 100

        const { result } = renderHook( ()=> useCounter(value))
        const { increment } = result.current

        act( ()=> increment() )

        const { counter } = result.current;

        expect( counter ).toBe( value + 1 )

       })

       test('Evaluar que el useCounter decremente en 1', () => { 

        const value = 100
        const { result } = renderHook( ()=> useCounter(value) )
        const { decrement } = result.current

        act( ()=> decrement() )
        
        const { counter } = result.current

        expect( counter ).toBe( value - 1 )

        })

        test('Evaluar que el reset restablesca el valor', () => { 
            const value = 100
            const { result } = renderHook( ()=> useCounter( value ) )
            const { decrement, reset } = result.current
            act( ()=>{
                decrement()
                reset()
            })

  

            const { counter } = result.current

            expect( counter ).toBe( value )
         })
 })
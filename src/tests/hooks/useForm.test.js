import { act, renderHook } from "@testing-library/react-hooks"
import useForm from "../../hooks/useForm"

describe('Pruebas en useForm', () => { 

    const initialForm = {
        name: 'Brandon',
        email: 'brandon@gmail.com'
    }

    test('Debe de regresar un formulario por defecto', () => { 

        const { result } = renderHook(()=> useForm( initialForm ))

        const [ values, handleInputChange, reset ] = result.current

        expect( values ).toEqual( initialForm )
        expect( typeof handleInputChange ).toBe( 'function' )
        expect( typeof reset ).toBe( 'function' )

    })

    test('Debe de cambiar el valor del formulario (cambiar name)', () => { 
        
        const { result } = renderHook(()=> useForm( initialForm ))

        // Desestructuración de un Array mediante sus indices especificos [0, 1, 2 ]
        const  { 1:handleInputChange } = result.current

        const nuevoNombre = 'Santiago'

        act( ()=> handleInputChange({ target:{ name: 'name' ,value: nuevoNombre } }))
        
        const [ values ] = result.current

        expect( values ).toEqual( { ...initialForm, name: nuevoNombre } )
    
    })


    test('Debe restableser el formulario con RESET', () => { 

        const { result } = renderHook(()=> useForm( initialForm ))

        // Desestructuración de un Array mediante sus indices especificos [0, 1, 2 ]
        const { 1:handleInputChange, 2:reset } = result.current

        const nuevoNombre = 'Santiago Hernandez'

        act( ()=> handleInputChange({ target: { name: 'name', value: nuevoNombre } }) )
        act( ()=> reset() )

        const [ values ] = result.current

        expect( values ).toEqual( initialForm )

     })

 })
import { shallow } from "enzyme"
import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks"
import useFetch from "../../../hooks/useFetch"
import useCounter from "../../../hooks/useCounter"

jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')


describe('Pruebas en <MultipleCustomHooks />', () => { 

    beforeEach( () => {
        useFetch.mockReturnValue({ data: null, loading: true, error: null })
    })
    
    beforeEach( () => {
        useCounter.mockReturnValue({ 
            counter: 1,
            increment: ()=>{},
            decrement: ()=>{},
         })
    })

    
    test('Debe de mostrarse correctamente', () => { 

        const wrapper = shallow( <MultipleCustomHooks /> )
        expect( wrapper ).toMatchSnapshot()
     })


     test('Debe de mostrar la información', () => { 

        useFetch.mockReturnValue({ 
            data: [{
                author: 'Brandon',
                quote: 'Hello world!'
            }], 
            loading: false, 
            error: null 
        })

        const wrapper = shallow( <MultipleCustomHooks /> )


        const loading = wrapper.find('Loading')
        expect( loading.exists() ).toBe( false )
        
        const quote = wrapper.find('.blockquote p').text().trim()
        expect( quote).toBe( 'Hello world!' )

        const author = wrapper.find('cite').text().trim()
        expect( author ).toBe('Brandon')
        

      })


 })
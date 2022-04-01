import { shallow } from "enzyme"
import TodoHeader from "../../../components/08-useReducer/TodoHeader"
import { demoTodos } from "../../fixtures/demoTodos"

describe('Pruebas en <TodoHeader/>', () => { 

    const handleAddTodo = jest.fn()

    const wrapper = shallow( 
        <TodoHeader 
            todos={ demoTodos } 
            handleAddTodo={ handleAddTodo } 
        />
    )

    test('Debe de mostrarse correctamente', () => {

        expect( <handleAddTodo /> ).toMatchSnapshot()

    })

    test('No debe de llamar AddTodo', () => { 

        const formSubmit = wrapper.find('form').prop('onSubmit')
        formSubmit( { preventDefault(){} } )

        expect( handleAddTodo ).not.toBeCalled()

     })

     test('Debe de llamar la funcion handleAddTodo', () => { 

        const inputChange = wrapper.find('input').prop('onChange')
        inputChange({target:{ name:'description', value:'Hola mundo!' }})


        const formSubmit = wrapper.find('form').prop('onSubmit')
        formSubmit( { preventDefault(){} } )


        expect( handleAddTodo ).toHaveBeenCalledTimes(1)
        expect( handleAddTodo ).toHaveBeenCalledWith(expect.any(Object))


        const todoTest = {
            id: expect.any(Number),
            desc: 'Hola mundo!',
            done: false
        }

        expect( handleAddTodo ).toHaveBeenCalledWith(todoTest)


        const inputValue = wrapper.find('input').prop('value')
        expect( inputValue ).toBe('')
        
      })

 })
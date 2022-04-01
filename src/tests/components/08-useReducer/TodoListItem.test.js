import { shallow } from "enzyme"
import TodoListItem from "../../../components/08-useReducer/TodoListItem"
import { demoTodos } from "../../fixtures/demoTodos"





describe('Pruebas en <TodoListItem />', () => { 

    const index = 1
    const todo = demoTodos[index]
    const handleDelete = jest.fn()
    const handleToggle = jest.fn()

    const wrapper = shallow(
        <TodoListItem 
            todo={ todo } 
            idx={ index }
            handleToggle={ handleToggle }
            handleDelete={ handleDelete } />
    )
   

    test('Debe de mostrarse correctamente', () => { 

        expect( wrapper ).toMatchSnapshot()

    })


     test('Debe de llamar la funcion handleDelete', () => {

        const button = wrapper.find('button')
        button.simulate('click', todo.id)


        expect( handleDelete ).toHaveBeenCalled()
        expect( handleDelete ).toHaveBeenCalledWith( todo.id )


    })


    test('Debe de llamar la funcion handleToggle', () => { 
        const parrafo = wrapper.find('p')
        parrafo.simulate('click', todo.id)

        expect( handleToggle ).toHaveBeenCalled()
        expect( handleToggle ).toHaveBeenCalledWith( todo.id )

    })


    test('Debe de mostrar el texto correctamente', () => { 

        const parrafo = wrapper.find('p')
        parrafo.simulate('click', todo.id)

        expect( parrafo.text().includes(todo.desc) ).toBe(true)
        expect( parrafo.text().includes( index + 1 ) ).toBe( true )

        expect( parrafo.text() ).toBe(`${ index + 1 }. ${ todo.desc }`)

    })


    test('Debe de tener la clase complete si todo.done = true', () => { 

        todo.done = true

        const wrapper = shallow(
            <TodoListItem 
                todo={ todo } 
                idx={index}
                handleToggle={ handleToggle }
                handleDelete={ handleDelete } />
        )

        const parrafo = wrapper.find('p')
        expect( parrafo.hasClass('complete') ).toBe(true)

    })
 })
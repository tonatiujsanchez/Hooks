import { shallow } from "enzyme"
import TodoList from "../../../components/08-useReducer/TodoList"
import { demoTodos } from "../../fixtures/demoTodos"



describe('Pruebas en <TodoList />', () => { 

    const handleToggle = jest.fn()
    const handleDelete = jest.fn()

    const wrapper = shallow( 
        <TodoList
            todos={ demoTodos }
            handleToggle = { handleToggle }
            handleDelete = { handleDelete }
        />
    )

    test('Debe de mostrarse correctamente', () => { 
        
        expect( wrapper ).toMatchSnapshot()

     })

     test('Debe tene 2 <TodoListItem />', () => { 



        const todos = wrapper.find('TodoListItem')
        
        expect( todos.length ).toBe( demoTodos.length )

        const hDelete = todos.at(0).prop('handleDelete')

        expect(hDelete).toEqual( expect.any(Function) )
        expect( typeof hDelete ).toBe('function')

      })


 })
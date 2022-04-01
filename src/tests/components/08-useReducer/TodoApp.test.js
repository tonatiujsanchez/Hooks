import { act } from "@testing-library/react"
import { mount, shallow } from "enzyme"
import TodoApp from "../../../components/08-useReducer/TodoApp"
import { demoTodos } from "../../fixtures/demoTodos"

describe('Pruebas en <TodoApp />', () => { 

    const wrapper = shallow( <TodoApp /> )
    Storage.prototype.setItem = jest.fn(()=>{})

    test('Debe de mostrarse correctamente', () => { 
        expect( wrapper ).toMatchSnapshot()
    })


    test('Debe de agregar el Todo', ()=>{

        const newTodo = {
            id: expect.any(Number),
            desc: 'Aprender Firebase',
            done: false
        }

        const wrapper = mount( <TodoApp /> )
        const handleAddTodo = wrapper.find('TodoHeader').prop('handleAddTodo')
        
        act(()=> {
             handleAddTodo(newTodo)
             handleAddTodo(demoTodos[0])
        })

        const small = wrapper.find('h1 small')

        expect( small.text().trim() ).toBe(`( 2 )`)

        expect( localStorage.setItem ).toHaveBeenCalledTimes(2)

    })

    
   test('Debe de eliminar el Todo', () => { 
        const wrapper = mount( <TodoApp /> )
        const handleAddTodo = wrapper.find('TodoHeader').prop('handleAddTodo')
        const handleDelete = wrapper.find('TodoList').prop('handleDelete')
        act(()=> {
            handleAddTodo(demoTodos[0])
            handleDelete(demoTodos[0].id)
       })

       const small = wrapper.find('h1 small')

       expect( small.text().trim() ).toBe(`( 0 )`)
    })


 })
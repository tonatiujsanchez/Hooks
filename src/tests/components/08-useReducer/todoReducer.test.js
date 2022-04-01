import todoReducer from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos"

describe('Pruebas en el todoReducer', () => {

    

    test('Debe de retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos, {})

        expect(state).toEqual(demoTodos)

    })



    test('Debe de agregar un todo', () => {

        const newTodo = {
            id: 3,
            desc: 'Aprender React Native',
            done: false
        }

        const action = {
            type: 'add',
            paylod: newTodo
        }

        const state = todoReducer(demoTodos, action)

        expect(state.length).toBe(demoTodos.length + 1)
        expect(state).toEqual([...demoTodos, newTodo])

    })



    test('Debe de Borrar un Todo', () => {

        const idTodo = 1


        const actionDelete = {
            type: 'delete',
            paylod: idTodo
        }

        const state = todoReducer( demoTodos, actionDelete )

        
        expect( state.length ).toBe( demoTodos.length - 1 )
        expect( state ).toEqual( [ demoTodos[1] ] )
        expect( state ).toEqual( demoTodos.filter( t => t.id !== idTodo ) )

    })



    test('Debe de hacer Toggle del Todo', () => { 

        const idTodo = 1

        const actionToggle = {
            type: 'toggle',
            paylod: idTodo
        }

        const state = todoReducer( demoTodos, actionToggle )


        expect(state[0].done ).toBe(true)
        expect( state ).toEqual( demoTodos.map( t => t.id === idTodo ? { ...t, done: !t.done } : t )  )
        
     })

})
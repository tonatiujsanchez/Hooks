import { mount } from "enzyme"
import AppRouter from "../../../components/09-useContext/AppRouter"
import { UserContext } from "../../../components/09-useContext/UserContex"



describe('Pruebas en <AppRouter />', () => { 

    const user = {
        id: 123,
        name: 'Brandon',
        email: 'brandon@gmail.com'
    }
    
    const wrapper = mount( 
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter /> 
        </UserContext.Provider>
    )

    test('Debe de mostrarse correctamente', () => { 

        expect( wrapper ).toMatchSnapshot()

     })



 })
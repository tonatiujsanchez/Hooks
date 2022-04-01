import { mount } from "enzyme"
import LoginScreen from "../../../components/09-useContext/LoginScreen"
import { UserContext } from "../../../components/09-useContext/UserContex"



describe('Pruebas en <LoginScreen/>', () => {
    const user = {
        id: 123,
        name: 'Brandon',
        email: 'brandon@gmail.com'
    }
    const setUser = jest.fn()
    const wrapper = mount(
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    )



    test('Mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })



    test('Debe de ejecutar el setUser con el argumento esperado', () => {

        const buttonClick = wrapper.find('button').prop('onClick')
        buttonClick() 

        expect( setUser ).toBeCalledTimes(1)
        expect( setUser ).toHaveBeenCalledWith(user)


    })

})
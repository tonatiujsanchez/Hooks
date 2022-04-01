import { mount } from "enzyme"
import HomeScreeen from "../../../components/09-useContext/HomeScreeen"
import { UserContext } from "../../../components/09-useContext/UserContex"



describe('Pruebas en <HomeScreeen />', () => { 

    const user = {
        name: 'Bradon',
        email: 'brandon@gmail.com'
    }

    const wrapper = mount( 
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreeen />
        </UserContext.Provider>
    )

    test('Debe de mostarrse correctamente', () => { 
    
        expect( wrapper ).toMatchSnapshot()

    })

    
 })
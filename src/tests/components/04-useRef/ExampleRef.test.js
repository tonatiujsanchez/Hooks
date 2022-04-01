import { shallow } from "enzyme"
import ExampleRef from "../../../components/04-useRef/ExampleRef"




describe('Pruebas en <ExampleRef />', () => { 

    test('Debe mostrarse correctamente', () => { 

        const wrapper = shallow( <ExampleRef /> )
        expect( wrapper ).toMatchSnapshot()

     })

     test('Debe de mostrar el componente <MultipleCustomHooks />', () => { 
        const wrapper = shallow( <ExampleRef /> )

        const button = wrapper.find('button')
        button.simulate('click')

        const multipleCustomHooks = wrapper.find('MultipleCustomHooks')
        expect( multipleCustomHooks.exists() ).toBe(true)


      })

 })
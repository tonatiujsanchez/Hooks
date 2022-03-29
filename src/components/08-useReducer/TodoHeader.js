import useForm from "../../hooks/useForm"


const TodoHeader = ({ todos, handleAddTodo }) => {

    const [{ description }, handleInputChange, resetForm] = useForm({
        description: ''
    })

    const handleSubmit = ( e ) =>{
        e.preventDefault()

        if (description.trim() === '') {
            return
        }

        const newTodo = {
            id: Date.now(),
            desc: description,
            done: false
        }

        handleAddTodo( newTodo )

        resetForm()

    }

    return (
        <header className='d-flex justify-content-between align-items-center flex-wrap'>
            <h1 className='fw-bold fs-2 m-0'>TODO APP <small className='fs-5'>( {todos.length} )</small></h1>
            <form onSubmit={handleSubmit} className='d-flex gap-2 align-items-center'>
                <input
                    type="text"
                    name='description'
                    className='form-control'
                    placeholder='Nueva Tarea'
                    autoComplete='off'
                    value={description}
                    onChange={handleInputChange} />
                <button type='submit' className='btn btn-outline-success'>Agregar</button>
            </form>
        </header>
    )
}

export default TodoHeader
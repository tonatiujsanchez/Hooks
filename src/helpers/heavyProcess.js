const heavyProcess = ( iterations )=> {
    for (let i = 0; i < iterations; i++) {
        console.log('Hola mundo')
    }
    return`${ iterations }: Iteraciones realizadas`
}

export default heavyProcess
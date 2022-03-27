import { memo } from 'react'




const Small = memo( ({ value }) => {

    console.log('Renderizado Nuevamente :(');

  return (
    <small>{ value }</small>
  )
})

export default Small
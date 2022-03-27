import React from 'react';
import ReactDOM from 'react-dom';
// import HookApp from './HookApp';
// import CounterApp from './components/01-useState/CounterApp';
// import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
// import SimpleForm from './components/02-useEffect/SimpleForm';
// import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook';
import MultipleCustomHooks from './components/03-examples/MultipleCustomHooks';





// import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <div className='p-5 container-sm'>
      <MultipleCustomHooks />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


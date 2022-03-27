import React from 'react';
import ReactDOM from 'react-dom';
// import HookApp from './HookApp';
// import CounterApp from './components/01-useState/CounterApp';
// import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
// import SimpleForm from './components/02-useEffect/SimpleForm';
// import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook';
// import MultipleCustomHooks from './components/03-examples/MultipleCustomHooks';
// import FocusScreen from './components/04-useRef/FocusScreen';
// import ExampleRef from './components/04-useRef/ExampleRef';
// import LayoutEffect from './components/05-useLayoutEffect/LayoutEffect';
// import Memorize from './components/06-memos/Memorize';
// import MemoHook from './components/06-memos/MemoHook';
import CallbackHook from './components/06-memos/CallbackHook';




// import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <div className='p-5 container-sm'>
      <CallbackHook />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


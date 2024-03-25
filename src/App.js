import React from 'react';
import { TodoProvider } from './TodoContext';
import { AppUI } from './AppUI';
import './Style.css';

function App() {
  return(
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )

}

export default App;

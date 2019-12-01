import React from 'react';
// import { Form } from '../Form/Form';
import { TodoItem } from '../TodoItem/TodoItem';
import Filters from '../Filters/Filters';

function Todos() {
  return (
    <div>
      <Filters/>
      {/* <Form/> */}
      <TodoItem/>
    </div>
  );
}

export default Todos;

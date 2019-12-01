import React from 'react';
import { Form } from '../Form/Form';
import { TodoItem } from '../TodoItem/TodoItem';

function Todos() {
  return (
    <div>
      <Form/>
      <TodoItem/>
    </div>
  );
}

export default Todos;

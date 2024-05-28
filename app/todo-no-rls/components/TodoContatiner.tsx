'use client';
import {
  createTodos,
  deleteTodosSoft,
  getTodos,
  getTodosById,
  updateTodos,
} from '@/apis/todos-no-rls';
import React, { useEffect } from 'react';

const TodoContatiner = () => {
  useEffect(() => {
    // createTodos('Hello world!');
    // updateTodos(4, 'Not hello');
    // deleteTodosSoft(5);
  }, []);

  return <div>TodoContatiner</div>;
};

export default TodoContatiner;

'use client';
import React from 'react';
import useTodosController from '../hooks/useTodosController';
import TodoList from '@/components/ui/TodoList';

const TodoContatiner = () => {
  const { loading, todos } = useTodosController();

  return (
    <div>
      <TodoList sharedUserFullName='test user' ownerUserId='123' />
    </div>
  );
};

export default TodoContatiner;

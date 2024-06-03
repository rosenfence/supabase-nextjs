'use client';
import React from 'react';
import useTodosController from '../hooks/useTodosController';
import TodoList from '@/components/ui/TodoList';

const TodoContatiner = () => {
  const { loading, todos, onCreateEmptyTodos, onDeleteTodos, onSearchTodos, onUpdateTodos } =
    useTodosController();

  return (
    <div>
      <TodoList
        sharedUserFullName='test user'
        ownerUserId='123'
        loading={loading}
        todoListData={todos}
        isReadOnly={false}
        onUpdate={onUpdateTodos}
        onCreate={onCreateEmptyTodos}
        onDelete={onDeleteTodos}
        onSearch={onSearchTodos}
      />
    </div>
  );
};

export default TodoContatiner;

import React, { Component } from 'react';

import Filters from '../Filters/Filters';
import TodoList from '../TodoList/TodoList';

import ModalContext from '../../contexts/ModalContext';
import TodoForm from '../TodoForm/TodoForm';
import { allOption } from '../../utils/constants';

class Todos extends Component {
  static contextType = ModalContext;

  state = {
    allTodoItems: [
      { id: 1231231, done: false, priority: 'low', title: 'test1', description: 'descr1' },
      { id: 1231232, done: true, priority: 'low', title: 'test2', description: 'descr2' },
      { id: 1231233, done: false, priority: 'normal', title: 'test3', description: 'descr3' },
      { id: 1231234, done: false, priority: 'normal', title: 'test4', description: 'descr4' },
      { id: 1231235, done: true, priority: 'low', title: 'test5', description: 'descr5' },
      { id: 1231236, done: false, priority: 'high', title: 'test6', description: 'descr6' },
      { id: 1231237, done: true, priority: 'low', title: 'test7', description: 'descr7' }
    ],
    filteredTodoItems: [],
    filters: {
      search: '',
      status: allOption.value,
      priority: allOption.value
    }
  };

  componentDidMount() {
    this.recalculate();
  }

  componentDidUpdate(prevProps, prevState) {
    const { allTodoItems, filters } = this.state;

    if (prevState.allTodoItems !== allTodoItems || prevState.filters !== filters) {
      this.recalculate();
    }
  }

  recalculate = () => {
    const { filters } = this.state;

    const filtersToApply = Object.keys(filters).filter(
      filterKey => filters[filterKey],
    );

    this.setState(({ allTodoItems }) => ({
      filteredTodoItems: allTodoItems.filter(todoItem => {
        return filtersToApply.every(filterName => {
          switch (filterName) {
            case 'search':
              return new RegExp(filters.search, 'i').test(todoItem.title);
            case 'status': {
              if (filters.status === allOption.value) return true;
              if (filters.status === 'open') return !todoItem.done;
              if (filters.status === 'done') return todoItem.done;
              break;
            }
            case 'priority':
              if (filters.priority === allOption.value) return true;

              return todoItem.priority === filters.priority;
            default:
              return true;
          }

          return null;
        });

      })
    }));
  };

  onFiltersChange = (filters) => {
    this.setState({
      filters
    });
  };

  onAddTodoItem = todoItem => {
    this.setState(({ allTodoItems }) => ({ allTodoItems: [...allTodoItems, todoItem] }));
  };

  onDone = (todoId) => {
    this.setState(({ allTodoItems }) => ({
      allTodoItems: allTodoItems.map(todoItem => ({
        ...todoItem,
        done: todoItem.id === todoId || todoItem.done,
      }))
    }));
  };

  handleEdit = values => {
    const { closeModal } = this.context;
    this.setState(({ allTodoItems }) => ({
      allTodoItems: allTodoItems.map(todoItem => {
        if (todoItem.id === values.id) return values;
        return todoItem;
      })
    }));

    closeModal();
  };

  onEdit = (todoId) => {
    const { allTodoItems } = this.state;
    const { openModal, closeModal } = this.context;

    const todoItem = allTodoItems.find(item => item.id === todoId);

    openModal({
      component: TodoForm,
      componentProps: {
        onSubmit: this.handleEdit,
        initialValues: todoItem,
        onClose: closeModal
      }
    });
  };

  onDelete = (todoId) => {
    this.setState(({ allTodoItems }) => ({
      allTodoItems: allTodoItems.filter(todoItem => todoItem.id !== todoId)
    }));
  };

  render() {
    const { filteredTodoItems, filters } = this.state;

    return (
      <div>
        <Filters filtersInitialValues={filters} onAddTodoItem={ this.onAddTodoItem } onFiltersChange={this.onFiltersChange} />
        <TodoList
          todoItems={ filteredTodoItems }
          onDone={ this.onDone }
          onEdit={ this.onEdit }
          onDelete={ this.onDelete }
        />
      </div>
    );
  }
}

export default Todos;

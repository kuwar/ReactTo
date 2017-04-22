var expect = require('expect');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: "SET_SEARCH_TEXT",
      searchText: "Some search text"
    };

    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    var action = {
      type: "TOGGLE_SHOW_COMPLETED"
    };
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: "ADD_TODO",
      todo: {
        id: '123abs',
        text: "Any thing we like",
        completed: false,
        createdAt: 1234,
      }
    };

    var res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });

  it('should add todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = "My todo item";

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const action = store.getActions();
      expect(action[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(action[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done);
  });

  it('should genereate ADD_TODOS action', () => {
    var todos = [{
      id: 111,
      text: "Anything here",
      completed: false,
      createdAt: 33000,
      completedAt: undefined
    }];
    var action = {
      type: "ADD_TODOS",
      todos
    };
    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    var action = {
      type: "TOGGLE_TODO",
      id: 1
    };
    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});

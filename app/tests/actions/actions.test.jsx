var expect = require('expect');
var actions = require('actions');

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
      text: "run"
    };

    var res = actions.addTodo(action.text);
    expect(res).toEqual(action);
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

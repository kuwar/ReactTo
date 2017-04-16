var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: "SET_SEARCH_TEXT",
        searchText: "dog"
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: "TOGGLE_SHOW_COMPLETED"
      }
      var res = reducers.showCompletedReducer(df(true), df(action));

      expect(res).toBe(false);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: "ADD_TODO",
        text: "Go for run"
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      var action = {
        type: "TOGGLE_TODO",
        id: 2
      };
      var state = [{
        id: 1,
        text: "Go for run",
        completed: true,
        createdAt: 10,
        completedAt: 12
      }, {
        id: 2,
        text: "Walk a dog",
        completed: false,
        createdAt: 125,
        completedAt: undefined
      }];
      var res = reducers.todosReducer(df(state), df(action));

      expect(res[1].completed).toEqual(true);
      expect(res[1].completedAt).toNotBe(undefined);
    });
  });
});

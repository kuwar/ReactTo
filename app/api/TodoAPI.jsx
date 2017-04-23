var $ = require('jquery');
module.exports = {
  
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filtered by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // Filtered by searchText
    /*filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });*/
    if (searchText.length > 0) {
     filteredTodos = filteredTodos.filter((todo) => {
       var text = todo.text.toLowerCase();
       if (text.indexOf(searchText) > -1 ) {
         return todo;
       }
     });
   }

    // Sort todo with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
}

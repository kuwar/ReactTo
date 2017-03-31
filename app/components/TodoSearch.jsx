var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function () {
    var searchText = this.refs.searchText.value;
    var showCompleted = this.refs.showCompleted.checked; // true or false

    this.props.onSearch(showCompleted, searchText);
  },
  render: function () {
    return (
      <div>
        <div>
          <input type="text" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;

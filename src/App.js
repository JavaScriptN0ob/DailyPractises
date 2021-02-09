import React from 'react';
import './App.css';

import CardList from './components/Card-list';
import SearchBox from './components/SearchBox';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleSearchChange(searchField) {
    this.setState({
      searchField,
    });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter((monster) => (
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ));
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          onSearchChange={this.handleSearchChange}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {CardList} from './conponents/card-list/card-list.component'
import './App.css';
import { SearchBox } from './conponents/seatch-box/search-box';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => this.setState({monsters: users}));
  }

  handleChange = event => {
    this.setState({searchField: event.target.value})
  };

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monster' handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;

/***
 * this - special keyword in js that references the context in which is being invoked.
 * we cannot call bind on arrow function. They automatically get lexical scoping --> they bind the this context to the place where they defined.
 * ***/


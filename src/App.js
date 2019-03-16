import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Terri', age: 25 },
      { name: 'Berri', age: 43 },
      { name: 'Merri', age: 34 },
    ],
    otherState: 'some value'
  }

  nameChangeHandler = (event) => {
    console.log('changeName')
    this.setState({
      persons: [
        { name: 'jake', age: 25 },
        { name: event.target.value, age: 43 },
        { name: 'Derri', age: 34 },
      ]
    });
  }

  switchNameHandler = (newName) => {
    console.log('switchName')
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: 'Kerri', age: 43 },
        { name: 'Derri', age: 34 },
      ]
    });
  };


  render() {
    const style = {
      backgroundColor: 'lightblue',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px'
    }

    return (
      <div className="App">
        <h1>More longer, friend, see that sky?</h1>
        <p>This state really hurts!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Jauqin")}>Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Jenn')}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} changed={this.nameChangeHandler} >I love sailing!
    </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }

}

export default App;


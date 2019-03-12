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



  switchNameHandler = (newName) => {
    console.log('was clicked')
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: 'Kerri', age: 43 },
        { name: 'Derri', age: 34 },
      ]
    });
  };


  render() {
    return (
      <div className="App">
        <h1>More longer, friend, see that sky?</h1>
        <p>This state really hurts!</p>
        <button onClick={() => this.switchNameHandler("Jauqin")}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Jenn')}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} >I love sailing!
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


import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name: 'Terri', age: 25},
      {name: 'Berri', age: 43},
      {name: 'Merri', age: 34},
    ],
    otherState : 'some value'
  }



  switchNameHandler = () => {
    console.log('was clicked')
    this.setState({persons : [
      {name: 'Lerri', age: 25},
      {name: 'Kerri', age: 43},
      {name: 'Derri', age: 34},
    ]
   });
  };


render () {
return (
  <div className="App">
    <h1>More longer, friend, see that sky?</h1>
    <p>This state really hurts!</p>
    <button onClick={this.switchNameHandler}>Switch Name</button>
    <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
    <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >I love sailing!</Person>
    <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
  </div>
);
}

}

export default App;


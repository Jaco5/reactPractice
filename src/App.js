import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// class App extends Component {
//   state = {
//     persons : [
//       {name: 'Terri', age: 25},
//       {name: 'Berri', age: 43},
//       {name: 'Merri', age: 34},
//     ]
//   }

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Terri', age: 25 },
      { name: 'Berri', age: 43 },
      { name: 'Merri', age: 34 },
    ],
    // otherState: 'some other value'
  });

const [otherState, setOtherState] = useState({
  otherState: 'some other value'
})//this does not have to be an object, it can be a string-array-number-boolean

console.log(personsState, otherState); //using HOOKS method replaces state, it does not update.

const switchNameHandler = () => {
  console.log('was clicked')
  setPersonsState({
    persons: [
      { name: 'Lerri', age: 25 },
      { name: 'Kerri', age: 43 },
      { name: 'Derri', age: 34 },
    ]
  });
};



return (
  <div className="App">
    <h1>More longer, friend, see that sky?</h1>
    <p>This really hurts!</p>
    <button onClick={switchNameHandler}>Switch Name</button>
    <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
    <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >I love sailing!</Person>
    <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
  </div>

);
    //return  React.createElement('div', {className:'App'}, React.createElement('h1', null, 'hi im a react app'), 'hi, im a react app')
  
}

export default app;

 // state = {
  //   persons : [
  //     {name: 'Terri', age: 25},
  //     {name: 'Berri', age: 43},
  //     {name: 'Merri', age: 34},
  //   ]
  // };

  // switchNameHandler = () => {
  //   console.log('was clicked')
  //   this.setState({persons : [
  //     {name: 'Lerri', age: 25},
  //     {name: 'Kerri', age: 43},
  //     {name: 'Derri', age: 34},
  //   ]
  //  });
  // };

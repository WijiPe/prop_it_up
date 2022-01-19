import React from 'react';
import './App.css';
import Personcard from './components/Personcard';

let peopleArr = [
{"firstName": "Jane", "lastName": "Doe", "age": 45, "hairColor": "Black"}, 
{"firstName": "John", "lastName": "Smith", "age": 88, "hairColor": "Brown"},
{"firstName": "Fillmore", "lastName": "Millard", "age": 50, "hairColor": "Brown"},
{"firstName": "Smith", "lastName": "Maria", "age": 62, "hairColor": "Brown"} ]

function App() {
  return (
    <div className="App">
      <div className="line">
        {peopleArr.map( p => {
          return <Personcard firstName = {p.firstName} lastName = {p.lastName}
          age = {p.age} hairColor = {p.hairColor} />
        })

        }
      </div>
       
    </div>
  );
}

export default App;

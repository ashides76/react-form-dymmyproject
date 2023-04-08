import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [firstName, setFirstName] = useState('');
  const [favFriend, setFavFriend] = useState('');
  const [isHappy, setIsHappy] = useState(false);
  const [age, setAge] = useState(false);
  
  const onSubmit = evt => {
    evt.preventDefault();
    axios.get(`?firstName=${firstName}&age=${age}`)
    axios.post('/', {firstName, age})
  }
  
  return (
    <div>
      <form 
        style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '10rem 10rem'}} 
        // action='https://mycode.com' //direct to
        // method='post'  //using post to send server
        onSubmit={onSubmit}
      >
        <h3>The name is {firstName || 'unknown'}</h3>
        <h3>The favorite friend is {favFriend || 'unknown'}</h3>
        <h3>I'm {isHappy ? 'happy' : 'unhappy'}</h3>

        <label htmlFor='firstName'>First Name: </label>
        <input 
          type="text"
          id='firstName'
          name='firstName'
          maxLength='15'
          placeholder='Enter First Name'
          onChange={event => setFirstName(event.target.value)}
        /> 
        <label htmlFor='friend'>Fav Friend: </label>
        <select id='friend' name='favFriend' onChange={event => setFavFriend(event.target.value)}>
          <option value={""}>Select A Friend</option>
          <option value={'dipesh'}>Dipesh</option>
          <option value={'khujema'}>Khujema</option>
          <option value='rakesh'>Rakesh</option>
        </select>
        <label style={{textAlign: 'center'}} htmlFor='yesBestFriend'>Best Friend:</label>
        <input 
          type='checkbox' 
          id='yesBestFriend' 
          name='bestFriend' 
          value='yes'
          onChange={event => setIsHappy(event.target.checked)}
        />
        <label htmlFor='age'>
          Age: <input type='number' id='age' name='age' onChange={event => setAge(event.target.value)}/>
        </label>
        <input type={'submit'}/>
        <button>send</button>
        <h3>The name is {firstName || 'unknown'} and age is {age || 'unknown'} </h3>
      </form>

    </div>
  );
}

export default App;

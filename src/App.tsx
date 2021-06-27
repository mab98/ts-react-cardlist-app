import * as React from 'react';
import { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  interface UserInterface {
    name: string;
    age: number;
    job: string;
  }

  const [user, setUser] = useState<UserInterface>({ name: '', age: 0, job: '' });
  const [users, setUsers] = useState<UserInterface[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const addUser = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    setUsers([...users, user]);
  }

  React.useEffect(() => {
    console.log(...users);
  }, [users]);

  return (
    <div className="container">
      <h1>React with Typescript</h1>
      <form onSubmit={addUser}>
        <label htmlFor="username">Name:</label> <br />
        <input type="text" name="name" id="username" value={user.name} onChange={handleChange} /> <br />
        <label htmlFor="userAge">Age:</label> <br />
        <input type="number" name="age" id="userAge" value={user.age} placeholder='enter age' onChange={handleChange} /> <br />
        <label htmlFor="userJob">Job:</label> <br />
        <input type="text" name="job" id="userJob" value={user.job} onChange={handleChange} /> <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default App;

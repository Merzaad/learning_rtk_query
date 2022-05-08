/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import logo from './logo.svg';
import { Counter } from './pages/counter/Counter';
import './App.css';
import { useGetPost } from './features/rtk-query/api';

function App() {
  const [x, setX] = React.useState('initial')
  const { data, error, isLoading } = useGetPost(1)

  React.useEffect(() => {
    if (data) setX(data)
  }, [data])

  React.useEffect(() => {
    if (error) console.log(error)
  }, [error])

  return (
    <div className="App">
      <header className="App-header">
        <p>testttttt</p>
        <h1>{x.title ? x.title : x}</h1>
        <h1>{isLoading ? 'loading' : 'done'}</h1>
        <Counter />
      </header>
    </div>
  );
}

export default App;

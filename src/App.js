/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import logo from './logo.svg';
import { Counter } from './pages/Counter';
import './App.css';
import { useGetPost } from './features/rtk-query/api';

function App() {
  const { data, error, isLoading } = useGetPost(1);
  return (
    <div className="App">
      <header className="App-header">
        <p>testttttt</p>
        <h1>{data && data.title}</h1>
        <h2>{isLoading && 'loading'}</h2>
        <Counter />
      </header>
    </div>
  );
}

export default App;

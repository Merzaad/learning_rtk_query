/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import logo from './logo.svg'
import { Counter } from './components/counter/Counter'
import Test from './components/test/Test'

import './App.css'
import { useGetPost } from './features/rtk-query/api'

function App() {
  const { data, isLoading } = useGetPost(2)

  return (
    <div className="App">
      <header className="App-header">
        <p>testttttt</p>
        <Test data={data} />
        <h1>{isLoading ? 'loading' : 'done'}</h1>
        <Counter />
      </header>
    </div>
  )
}

export default App

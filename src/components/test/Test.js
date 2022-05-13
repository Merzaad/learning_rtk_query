/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react'

export default function Test({ data }) {
  return (
    <div>
      <h1>{data ? data.title : 'no data'}</h1>
    </div>
  )
}

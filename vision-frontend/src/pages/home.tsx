import React from 'react'
import InputForm from '../components/inputForm/InputForm'
import Recommendations from '../components/recommendations/recommendations'
import Results from '../components/result/result';
import { useState } from 'react';


function Home() {  
  const [result, setResult] = useState<any>(null);
  const [input, setInput] = useState<any>(null);

  return (
    <div className="container">
    <div className="header">
      <h1>Vision System Selector</h1>
      <p className="subtitle">
        Intelligent camera & lens selection for machine vision systems
      </p>
    </div>

      <InputForm onCalculate={(data, form) => {
        setResult(data);
        setInput(form);
      }} />


      {result && (
        <>
          <Results data={result.calculation} input={input} />
          <Recommendations data={result.recommendations} />
        </>
      )}
    </div>
  );
}

export default Home

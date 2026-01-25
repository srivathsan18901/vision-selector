import React from 'react'
import InputForm from '../components/inputForm/InputForm'
import Recommendations from '../components/recommendations/recommendations'
import Results from '../components/result/result';
import { useState } from 'react';
import Toast from '../components/toast/toast';

function Home() {  
  const [result, setResult] = useState<any>(null);

  return (
    <div className="container">
    <div className="header">
      <h1>Vision System Selector</h1>
      <p className="subtitle">
        Intelligent camera & lens selection for machine vision systems
      </p>
    </div>

      <InputForm onCalculate={setResult} />

      {result && (
        <>
          <Results data={result.calculation} />
          <Recommendations data={result.recommendations} />
        </>
      )}
    </div>
  );
}

export default Home

import React from 'react'
import InputForm from '../components/inputForm/InputForm'
import Recommendations from '../components/recommendations/recommendations'
import Results from '../components/result/result';
import { useState } from 'react';

function Home() {  
  const [result, setResult] = useState<any>(null);

  return (
    <div className="container">
      <h1>Vision System Camera & Lens Selector</h1>

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

import React, { useRef, useState } from "react";
import InputForm from "../components/inputForm/InputForm";
import Recommendations from "../components/recommendations/recommendations";
import Results from "../components/result/result";
import HeroVid from "../assets/Main_video/Industrial_Vision_System_Video_Generation.mp4"

function Home() {
  const [result, setResult] = useState<any>(null);
  const [input, setInput] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);

  const handleGetStarted = () => {
    setShowForm(true);

    // wait for form to render, then scroll
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="container">
      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-left">
          <span className="badge-pill">🚀 Smart Vision selection Tool</span>

          <h1>BGR Neo <br/> Vision System Selector</h1>

          <p className="subtitle">
            Intelligent camera & lens selection for machine vision systems
          </p>

          <button className="cta-btn" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>

        <div className="hero-right">
          <video
            className="hero-video"
            src={HeroVid}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

      </div>

      {/* INPUT FORM (VISIBLE ONLY AFTER CLICK) */}
      {showForm && (
        <div ref={formRef}>
          <InputForm
            onCalculate={(data: any, form: any) => {
              setResult(data);
              setInput(form);
            }}
          />
        </div>
      )}

      {/* RESULTS */}
      {showForm && result && (
        <>
          <Results data={result.calculation} input={input} />
          <Recommendations data={result.recommendations} />
        </>
      )}
    </div>
  );
}

export default Home;

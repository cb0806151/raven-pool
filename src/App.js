import React from "react";
import './App.css';

function App() {

  return (
    <>
      <div className="container">
        <div className="title tablet"><span className="gray-text">The</span> Raven Pool</div>
        <div className="stats-container tablet">
          <div className="stat">178.8K<br/><span className="stat-description gray-text">Active Stake</span></div>
          <div className="stat">340<br/><span className="stat-description gray-text">Epoch Fee</span></div>
          <div className="stat">5%<br/><span className="stat-description gray-text">Variable Fee</span></div>
          <div className="stat">1.5K<br/><span className="stat-description gray-text">Pledge</span></div>
        </div>
        <div className="title tablet">How we Give Back</div>
        <div className="tablet">
          <div className="contributions">Following in the footsteps of LAKE pool and volunteering timestamping videos from the crypto community.</div>
          <hr/>
          <div className="contributions">Giving back to our stakers by distributing 10 ADA to a random one after every block.</div>
          <hr/>
          <div className="contributions">You decide: join <a href="https://fireship.io/tags/css/" target="_blank">our Discord</a> and tell us how you think Raven Pool should be giving back to the crypto community</div>
        </div>
        <div className="references-title tablet">Photography courtesy of <a href="https://fireship.io/tags/css/" target="_blank">Mimmo Lusito</a></div>
      </div>
    </>
  )
};

export default App;
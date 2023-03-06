import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import videoBg from '../src/assets/cabin-150784.mp4'
import './styles.css'

const App = () => {
  
  return <section className='page'>
    {/** overlay */}
    <div className='overlay'></div>
    {/** video */}
    <video src={videoBg}autoPlay loop muted ></video>
    {/** content */}
    <div className='page__content'>
      <h1>Launching Soon</h1>
      <h3>Leave your email and we'll let you know once the site goes live.</h3>
      {/** clock */}
      <FlipClockCountdown
        to={new Date().getTime() + 24 * 3600 * 1000 + 500}
        className='flip-clock'
        labels={['DAYS','HOURS','MINUTES','SECONDS']}
        duration={0.5}
      />

      <button className='btn'>Notify Me</button>
    </div>
  </section>;
};

export default App;

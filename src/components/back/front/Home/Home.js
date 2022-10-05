import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div className='HomePage'>
      <h3 className='titleH'>The Studio Ghibli Prints</h3>
      <h2 className='quoteH'>"Just follow your heart and keep smiling"</h2>
      <a href='/product' className='tracking-out-expand expand'>visit the shop</a>
  </div>
  )
}

export default Home

import React from 'preact/compat';
import { h } from 'preact';
import Heroes from './Heroes';
import Header from './Header';

const Home = () => {
  console.log(process.env.PREACT_APP_SECRET_CODE);
  return (
    <div>
        <Header />
        <Heroes />
    </div>
  )
}

export default Home
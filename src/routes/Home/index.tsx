import React from 'preact/compat';
import { h } from 'preact';
import Header from './Header';
import Heroes from './Heroes';

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
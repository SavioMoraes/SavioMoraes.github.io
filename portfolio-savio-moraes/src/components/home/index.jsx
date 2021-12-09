import React from 'react';
import Header from './header';
import Apresentation from './apresentation';
import Main from './main';
import Footer from './footer';
import './home.css'

function Home() {
  return (
    <div className="home">
      <div>
        <Header />
        <div>
          <Apresentation />
        </div>
        <div>
          <Main />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home;

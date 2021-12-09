import React from 'react';
import Apresentation from './apresentation';
import Footer from './footer';
import Header from './header';
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
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home;

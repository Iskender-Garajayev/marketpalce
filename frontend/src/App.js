import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import {Container} from 'react-bootstrap'

const App = () => {
  return (
    <>
      <Header/>
      <Container>
      <main>
        <h1>Welcome to Proshope</h1>
      </main>
      </Container>
      <Footer/>
    </>
  );
}

export default App;

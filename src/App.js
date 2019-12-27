import React from 'react';
import { Header, Container } from 'semantic-ui-react'
import './App.css';

class App extends React.Component {
  render(){
    return(
      <div>
        <Header as='h1'> Trivia Games </Header>
        <Container>
          Game Board Goes Here
        </Container>
      </div>
    );
  }
}


export default App;

import React from 'react';
import { Header, Container, Card } from 'semantic-ui-react'
import { getCategories } from '/fetches/backend.js'
import './App.css';

class App extends React.Component {
  componentDidMount(){
    getCategories().then(data)
  }

  render(){
    return(
      <div>
        <Header as='h1'> Trivia Games </Header>
        <Container>
          Game Board Goes Here
          <Card.Group>
            <Card fluid color='red' header='Option 1' />
            <Card fluid color='orange' header='Option 2' />
            <Card fluid color='yellow' header='Option 3' />
          </Card.Group>
        </Container>
      </div>
    )
  }
}


export default App;

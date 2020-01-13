import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Header, Container, Card, Button, Image } from 'semantic-ui-react'
import { getCategories } from './fetches/backend.js'
import { connect } from 'react-redux';
import './App.css';

class App extends React.Component {
  componentDidMount(){
    getCategories().then(data => this.props.dispatch({ type: 'GET_CATS', cats: data }))
  }

  render(){
    return(
      <div>
        <Image
          centered
          size='small'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8RDUBXOI7bmfxwx7c88cbdRbziTZ6urkgzutvtFAAWxtgza04KQ&s'
        />
        <Header size='huge' textAlign='center' color='Black' dividing> Trivia Games </Header>
        <Container textAlign='center'>
          <Card.Group centered>

            <Card color='red' >
              <Card.Content header='Ouestion 1' />
                <Card.Content description='sdkjfdjklf jdfsj jdfksldh f jshlfkdjf jsldfkjsdh lsjdhjdfhls sdhkj ' />
                <Card.Content extra>
                <Button size='mini' color='red'>Click Here</Button>
              </Card.Content>   
            </Card>

            <Card color='orange' >
              <Card.Content header='Ouestion 2' />
                  <Card.Content description='sdkjfdjklf jdfsj jdfksldh f jshlfkdjf jsldfkjsdh lsjdhjdfhls sdhkj ' />
                  <Card.Content extra>
                  <Button size='mini' color='orange'>Click Here</Button>
              </Card.Content>   
            </Card>

            <Card color='yellow' >
              <Card.Content header='Ouestion 3' />
                  <Card.Content description='sdkjfdjklf jdfsj jdfksldh f jshlfkdjf jsldfkjsdh lsjdhjdfhls sdhkj ' />
                  <Card.Content extra>
                  <Button size='mini' color='yellow'>Click Here</Button>
              </Card.Content>   
            </Card>

            <Card color='blue' >
              <Card.Content header='Ouestion 4' />
                  <Card.Content description='sdkjfdjklf jdfsj jdfksldh f jshlfkdjf jsldfkjsdh lsjdhjdfhls sdhkj ' />
                  <Card.Content extra>
                  <Button size='mini' color='blue'>Click Here</Button>
              </Card.Content>   
            </Card>

          </Card.Group>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({ cats: state.cats.cats })
export default connect(mapStateToProps)(App);

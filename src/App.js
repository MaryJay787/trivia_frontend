import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Header, Container, Card, Button, Image, Divider } from 'semantic-ui-react'
import { getCategories } from './fetches/backend.js'
import { connect } from 'react-redux';
import './App.css';

class App extends React.Component {
  componentDidMount(){
    getCategories().then(all_categories => this.props.dispatch({ type: 'GET_CATS', all_categories}))
    // getCategories().then(all_categories => console.log(all_categories))

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
        <Container textAlign='center' >
          <Header>Pick Your Category</Header>
            <Card.Group>
              <Card>
                <Card.Content>
                  {/* <Card.Header>{this.props.cats[1]}</Card.Header> */}
                  <Card.Header>First Headers</Card.Header>
                  <Card.Meta>Co-Worker</Card.Meta>
                  <Card.Description>
                    Matthew is a pianist living in Nashville.
                  </Card.Description>
                </Card.Content>
              </Card>

              <Card>
                <Card.Content>
                  <Card.Header content='Jake Smith' />
                  <Card.Meta content='Musicians' />
                  <Card.Description content='Jake is a drummer living in New York.' />
                </Card.Content>
              </Card>

              <Card>
                <Card.Content
                  header='Elliot Baker'
                  meta='Friend'
                  description='Elliot is a music producer living in Chicago.'
                />
              </Card>
            </Card.Group>
        </Container>

        <Divider></Divider>

        <Container textAlign='center'>
          <Card.Group centered>

            <Card color='yellow' >
              <Card.Content header='Ouestion 1' />
                <Card.Content description='sdkjfdjklf jdfsj jdfksldh f jshlfkdjf jsldfkjsdh lsjdhjdfhls sdhkj ' />
                <Card.Content extra>
                <Button size='mini' color='red'>Click Here</Button>
              </Card.Content>   
            </Card>

            <Card color='black' >
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

            <Card color='black' >
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

const mapStateToProps = state => ({ cats: state.categories })
export default connect(mapStateToProps)(App);

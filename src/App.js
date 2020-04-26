import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Header, Container, Card, Button, Image, Divider } from 'semantic-ui-react'
import { getCategories, getPOIQuestions } from './fetches/backend.js'
import { connect } from 'react-redux';
// import store from './index'
import './App.css';

class App extends React.Component {
  componentDidMount(){
    getCategories().then(all_categories => this.props.dispatch({ type: 'GET_CATS', all_categories}))
    // getCategories().then(all_categories => console.log(this.state))
    // getPOIQuestions().then(poi_questions => console.log(this.props))
    getPOIQuestions().then(questions => this.props.dispatch({ type: 'GET_POI_QUES', questions}))


  }

  // displayQuestions(){
  //   this.props.all_questions ? this.props.all_questions : 'No Questions'
  // }

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
                <Card.Content
                  header={this.props.categories[0] ? this.props.categories[0].title : 'No Title'}
                  meta='Friend'
                  description='Elliot is a music producer living in Chicago.'
                />
              </Card>

              <Card>
              <Card.Content
                  header={this.props.categories[1] ? this.props.categories[1].title : 'No Title'}
                  meta='Friend'
                  description='Elliot is a music producer living in Chicago.'
                />
              </Card>

              <Card>
                <Card.Content
                  header={this.props.categories[2] ? this.props.categories[2].title : 'No Title'}
                  meta='Friend'
                  description='Elliot is a music producer living in Chicago.'
                />
              </Card>

              <Card>
                <Card.Content
                  header={this.props.categories[3] ? this.props.categories[3].title : 'No Title'}
                  meta='Friend'
                  description='Elliot is a music producer living in Chicago.'
                />
              </Card>

              <Card>
                <Card.Content
                  header={this.props.categories[4] ? this.props.categories[4].title : 'No Title'}
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
              <Card.Content header='Question 1' />
                <Card.Content description={this.props.all_questions[0] ? this.props.all_questions[0].ask : 'No Question'} />
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

const mapStateToProps = state => ({ categories: state.cats.categories, all_questions: state.cats.all_questions })
// export default connect(mapStateToProps)(App);
export default connect(mapStateToProps)(App);


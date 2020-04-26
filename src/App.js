import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Header, Container, Card, Button, Image, Divider } from 'semantic-ui-react'
import { getCategories, getPOIQuestions } from './fetches/backend.js'
import { connect } from 'react-redux';
// import store from './index'
import './App.css';

function Question(){
  return (
    <Card color='yellow' >
      <Card.Content header='Conditional Rendered Question' />
        {/* <Card.Content description={this.props.all_questions[0] ? this.props.all_questions[0].ask : 'No Question'} /> */}
        <Card.Content description='this is where the question will go'/>
        <Card.Content extra>
        <Button size='mini' color='red'>Click Here</Button>
      </Card.Content>   
    </Card>
  );
}

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
  handlePOIClick = (e) => {
    e.preventDefault()
    this.props.dispatch({ type: 'CLICKED'})
    
    console.log('POI question has been clicked')
  }

  handleProClick = () => {
    this.props.dispatch({ type: 'CLICKED'})
    console.log('Prophets question has been clicked')
  }

  handleWIClick = () => {
    this.props.dispatch({ type: 'CLICKED'})
    console.log('WI questions has been clicked')
  }

  handleQuranClick = () => {
    this.props.dispatch({ type: 'CLICKED'})
    console.log('Quran question has been clicked')
  }

  handleHadithClick = () => {
    this.props.dispatch({ type: 'CLICKED'})
    console.log('Hadith question has been clicked')
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
              <Card onClick={this.handlePOIClick}>
                <Card.Content
                  header={this.props.categories[0] ? this.props.categories[0].title : 'No Title'}
                  meta='Friend'
                  description='Elliot is a music producer living in Chicago.'
                />
              </Card>

              <Card onClick={this.handleProClick}>
              <Card.Content
                  header={this.props.categories[1] ? this.props.categories[1].title : 'No Title'}
                  meta='Friend'
                  description='Elliot is a music producer living in Chicago.'
                />
              </Card>

              <Card onClick={this.handleWIClick}>
                <Card.Content
                  header={this.props.categories[2] ? this.props.categories[2].title : 'No Title'}
                  meta='Friend'
                  description='Elliot is a music producer living in Chicago.'
                />
              </Card>

              <Card onClick={this.handleQuranClick}>
                <Card.Content
                  header={this.props.categories[3] ? this.props.categories[3].title : 'No Title'}
                  meta='Friend'
                  description='Elliot is a music producer living in Chicago.'
                />
              </Card>

              <Card onClick={this.handleHadithClick}>
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
          {this.props.clicked ? <Question /> : 'No Question'}
        </Container>
       
      </div>
    )
  }
}

const mapStateToProps = state => ({ categories: state.cats.categories, all_questions: state.cats.all_questions, clicked: state.cats.clicked })
// export default connect(mapStateToProps)(App);
export default connect(mapStateToProps)(App);


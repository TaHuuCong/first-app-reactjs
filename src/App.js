import React, {Component} from 'react';
import './App.css';
import Comment from './components/Comment';
import Clock from './components/Clock';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  user: {
    name: 'Cong Ta',
    avatarUrl: 'https://placekitten.com/g/64/64'
  },
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <Comment date={comment.date} text={comment.text} user={comment.user}/>
                <Clock />
            </div>
        );
    }
}

export default App;

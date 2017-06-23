import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [
        'Hi there, how are you. Hope you are fine',
        'I am fine, and you. Where are you',
        'well, thats cool, very very cool, cool'
      ]
    };
  }

  render(){
    var messageNodes = this.state.messages.map((message) => {
      return (
        <div>{message}</div>
      );
    });

    return (
      <div><h1>Hello, World!</h1>{messageNodes}</div>
    );
  }
}

export default App;

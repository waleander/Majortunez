import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [
        'Hi there, how are you',
        'I am fine, and you. Where are you'
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
      <div>{messageNodes}</div>
    );
  }
}

export default App;

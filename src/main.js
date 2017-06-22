import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App.jsx';
import path from 'path';


ReactDOM.render(React.createElement(App),  document.getElementById('container') );

if (module.hot) {
  module.hot.accept(path.resolve(__dirname, '/components/App'), function() {
    console.log('Accepting the updated library module!');
    render(App);
  })
}

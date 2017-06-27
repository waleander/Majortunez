import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/admin/App.jsx';
import path from 'path';


ReactDOM.render(React.createElement(App),  document.getElementById('container') );

if (module.hot) {
  module.hot.accept(path.resolve(__dirname, '/components/admin/app'), function() {
    console.log('Accepting the updated library module!');
    ReactDOM.render(App);
  });
}

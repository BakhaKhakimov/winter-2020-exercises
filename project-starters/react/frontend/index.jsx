import React from 'react';
import ReactDOM from 'react-dom';
import { Contact } from './contact/contact.jsx';
import './index.css';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <>
        <Contact gender="female" name="Patsy Gillan" number="334-343-2987" />
        <Contact gender="female" name="Lucille R. Smith" number="517-813-8608" />
      </>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));

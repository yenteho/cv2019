import React, { Component } from 'react';
import { H1, H2, H3, H4 } from './components/typography'
import { default as Button } from './components/button'
import './sass/style.scss';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <H1>Heading 1</H1>
          <H2>Heading 2</H2>
          <H3>Heading 3</H3>
          <H4>Heading 4</H4>
          <Button type="submit"><H3>Hello world</H3></Button>
        </div>
      </div>
    );
  }
}
export default App;
import React, { Component } from 'react';
import styled from 'styled-components'
// import { H1, H2, H3, H4 } from './components/typography'
// import { default as Button } from './components/button'
// import './sass/style.scss';
import {ResetStyle, GlobalStyle} from './components/globalStyle'
class App extends Component {
  render() {
    return (
      <div className="App">
        <ResetStyle />
        <GlobalStyle />
          {/* <H1>Heading 1</H1>
          <H2>Heading 2</H2>
          <H3>Heading 3</H3>
          <H4>Heading 4</H4>
          <Button type="submit"><H3>Hello world</H3></Button> */}
          <CheckBoxWrapper>
            <CheckBox id="checkbox" type="checkbox"/>
            <CheckBoxLabel htmlfor="checkbox"/>
          </CheckBoxWrapper>
      </div>
    );
  }
}

const CheckBoxWrapper = styled.div`
  position: relative; 
  text-align: center;
`
const CheckBoxLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 24px;
    border-radius: 15px;
    background: white;
    border: 1px solid rgba(0,0,0,0.64);
    &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 17px;
        height: 17px;
        margin: 2px;
        background: rgba(0,0,0,0.32);
    }
`;
const CheckBox = styled.input`
    opacity: 1;
    cursor: pointer;
    z-index:1;
    border-radius: 15px;
    width: 40px;
    height: 24px;
  &:checked + ${CheckBoxLabel} {
    border: 2px solid #33997a;
    &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        margin: 2px 2px 2px 18px;
        background: #33997a;
    }
  }
`;


export default App;
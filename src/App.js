// import React, { Component } from 'react';
import React from 'react';
import styled from 'styled-components'
import { ThemeProvider } from "styled-components";
import theme from 'styled-theming';
// import { H1, H2, H3, H4 } from './components/typography'
// import { default as Button } from './components/button'
// import './sass/style.scss';
// import {ResetStyle, GlobalStyle} from './components/globalStyle'

// const DefaultTheme = {
//   backgroundColor: 'white',
//   fontColor: "#33997a",`
//   borderColor: "#33997a"
// }
// const PinkTheme = {
//   backgroundColor: '#DB7290',
//   fontColor: "white",
//   borderColor: "#ffd7e8"
// };


const BackgroundColor = theme('mode', {
  DefaultTheme: '#fff',
  PinkTheme: '#DB7290',
});
const FontColor = theme('mode', {
  DefaultTheme: '#33997a',
  PinkTheme: '#fff',
});
const BorderColor = theme('mode', {
  DefaultTheme: '#33997a',
  PinkTheme: '#ffd7e8',
});

// function withLoading (Component) {
//   return function({loadingComponent,...restProps}){
//     if(!restProps.data) return loadingComponent
//     return <Component {...restProps} />
//   }
// } //=> 匿名函式 React Devtool 沒有名字

function withLoading (Component) {
  function withLoadingHOC ({loadingComponent,...restProps}){
    if(!restProps.data) return loadingComponent
    return <Component {...restProps} />
  } 
  return withLoadingHOC
}


const LoadingText1 = () => (
  <h1>loading1...</h1>
)
const LoadingText2 = () => (
  <h1>loading2...</h1>
)

const ButtonText = (props) => {
  return (
    <React.Fragment>
      <Button>{props.data.text}</Button>
      {props.loadingComponent}
    </React.Fragment>
    )
}

const ButtonTextwithLoading = withLoading(ButtonText)

export const App = () => {
  return (
    <div>
      <ButtonTextwithLoading data={{text: 'Hello'}} loadingComponent={<LoadingText2/>} />
    </div>
  );
}

// export const App = () => {
//   return (
//     <div>
//       <Button>Normal</Button>
//       <ThemeProvider theme={{ mode: 'PinkTheme' }}>
//         <Button>Themed</Button>
//       </ThemeProvider>
//     </div>
//   );
// }

// class App extends Component {
//   // We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
//   constructor() {
//     super();
//     this.state = {
//       Theme: PinkTheme
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//           <div>
//             <Button>Normal</Button>
//             <ThemeProvider theme={{ mode: 'PinkTheme' }}>
//               <Button>Themed</Button>
//             </ThemeProvider>
//           </div>
//         {/* <ResetStyle />
//         <GlobalStyle />
//           <H1>Heading 1</H1>
//           <H2>Heading 2</H2>
//           <H3>Heading 3</H3>
//           <H4>Heading 4</H4>
//           <Button type="submit"><H3>Hello world</H3></Button> */}
//           {/* <CheckBoxWrapper>
//             <CheckBox id="checkbox" type="checkbox"/>
//             <CheckBoxLabel htmlfor="checkbox"/>
//           </CheckBoxWrapper> */}
//       </div>
//     );
//   }
// }

// const CheckBoxWrapper = styled.div`
//   position: relative; 
//   text-align: center;
// `
// const CheckBoxLabel = styled.label`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 40px;
//     height: 24px;
//     border-radius: 15px;
//     background: white;
//     border: 1px solid rgba(0,0,0,0.64);
//     &::after {
//         content: "";
//         display: block;
//         border-radius: 50%;
//         width: 17px;
//         height: 17px;
//         margin: 2px;
//         background: rgba(0,0,0,0.32);
//     }
// `;
// const CheckBox = styled.input`
//     opacity: 1;
//     cursor: pointer;
//     z-index:1;
//     border-radius: 15px;
//     width: 40px;
//     height: 24px;
//   &:checked + ${CheckBoxLabel} {
//     border: 2px solid #33997a;
//     &::after {
//         content: "";
//         display: block;
//         border-radius: 50%;
//         width: 16px;
//         height: 16px;
//         margin: 2px 2px 2px 18px;
//         background: #33997a;
//     }
//   }
// `;


// Define our button, but with the use of props.theme this time
const Button = styled.div`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 2em;
  border-radius: 3px;
  display: inline-block;

  /* Color the border and text with theme.main */
  
  color: ${FontColor};
  border: 2px solid ${BorderColor};
  background-color: ${BackgroundColor};
`;


// Define what props.theme will look like


export default App;
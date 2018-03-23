// 시작은 index.js(endpoint) 부터 시작을 한다.
// CRA가 만들어 놓은 설정이다.

/*

    React 의 장점
    1. component단위의 개발이 가능하다.
    2. virtual DOM 개념을 사용한다.
    3. JSX문법으로 인해 html 작업을 좀더 쉽게 작업할수 있다.
    
*/

// var React = require('react');랑 같다

import React from 'react'; // 리엑트 문법을 사용할수 있게
import ReactDOM from 'react-dom'; // 리엑트로 만들내용을 DOM에 만들어 준다.

// 컴포넌트 가져오기

import App from './App'; //.js 생략가능

//ReactDOM.render(무엇을 그릴까?,어디에 그릴까?) 
//ReactDOM.render(<h1>First React App </h1>,document.getElementById('root'));

// Without JSX
/*ReactDOM.render(React.createElement('h1',null,'First React App'),
  document.getElementById('root')
  );*/


ReactDOM.render(<App />,document.getElementById('root'));







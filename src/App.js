import React from 'react';

/*
    컴포넌트는 항상 단일태그로 시작해야 한다. 하여 이럴때 <div> 태그로 하나로 묶어준다.
    단점 : 불필요한 태그들이 많이 생성된다.
    
    JSX 문법 안에는 if, for 등을 사용할수가 없다.
//                 { (true) ? 'a' : ''} 

*/

/*
    IDE(브라켓,서브라임,아톰,vscode) 왠만하면 실무에서는 브라켓을 쓰지말자
    
    자동완성기능(코드) -> snippet -> extension
*/

import Header from './components/Header';
import Content from './components/Content';
import First from './components/First';

class App extends React.Component {
        
    render(){
        
        let text = 'React';
        
        return (
            <div>
                <Header />
                <Content />
                <First text={text}/>
            </div> // return안에다가 자바스크립트 변수나 문법을 쓰기 위해서는 그 안쪽이 {}을 사용하여 써주어야된다.
        ) // return되는 태그가 2개 이상이면 ()를 해준다.
    }
}

export default App;


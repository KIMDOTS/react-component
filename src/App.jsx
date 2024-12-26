import './App.css'
import { Component, useEffect, useState } from 'react';

function App(){
  const [showCounter, setShowCounter] = useState(false);

  return (
    <>
      {showCounter && <Counter />}
      <br />
      <button onClick={() => setShowCounter((prev) => !prev)}>show?</button>
    </>
  )
}

// 클래스 컴포넌트 생명주기
// class Counter extends Component {
//   constructor() {
//     super(); // super()를 호출해야 합니다.
//     this.state = { counter: 1 };
//     console.log('constructor')
//   }

//   componentDidMount(){
//     console.log('DidMount');
//   }

//   componentDidUpdate(){
//     console.log('DidUpdate');
//   }

//   componentWillUnmount(){
//     console.log('WillUnmount');
//   }

//   render() {
//     console.log("render");
//     return (
//       <>
//       <div>counter : {this.state.counter}</div>
//       <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>+</button>
//       </>
//     ); // JSX를 return하는 부분을 괄호로 묶어야 합니다.
//   }
// }

// 함수 컴포넌트 생명주기
function Counter() {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(100);
  
  // 1. 컴포넌트가 최초로 렌더링 될 때에만 조작을 하고 싶다!
  useEffect(() => {
    console.log("맨 처음 렌더링 될 때");
  }, []);

  // 2. 컴포넌트가 리렌더링 될 떄 조작하고 싶다!
  useEffect(() => {
    console.log("리렌더링 될 때");
  });

  // 3. 특정 상태값이 변할때에만 조작하고 싶다!
  useEffect(() => {
    console.log("특정 상태값이 변할 때");
  }, [counter]);

  // 4. 컴포넌트가 최종적으로 언마운트 될때 조작하고 싶다!
  useEffect(() => {
    return() => {
      console.log("컴포넌트 언마운트 될때");
    }
  }, []);

  return (
    <>
      <div>counter : {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <div>counter2 : {counter2}</div>
      <button onClick={() => setCounter2(counter2 - 1)}>-</button>
    </>
  );
}


export default App;

import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from 'styled-components'
import Nav from "./components/Nav";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`



function App() {
  return (
      <Router>
        <Wrapper>
          <Main>
          <Switch>
            <Route path="/tag">
              <Tag />
            </Route>
            <Route path="/money">
              <Money />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Redirect exact from="/" to="money" />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
          </Main>
          <Nav/>
        </Wrapper>
      </Router>
  );
}

function Statistics() {
  return <h2>统计页面</h2>;
}

function Tag() {
  return <h2>标签页面</h2>;
}

function Money() {
  return <h2>记账页面</h2>;
}

function NoMatch(){
  return (
      <div>无法找的此页面，请确定网址是否正确</div>
  )
}
export default App;

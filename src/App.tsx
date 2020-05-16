import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/tag">标签页</Link>
              </li>
              <li>
                <Link to="/money">记账页</Link>
              </li>
              <li>
                <Link to="/statistics">统计页</Link>
              </li>
            </ul>
          </nav>

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
        </div>
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

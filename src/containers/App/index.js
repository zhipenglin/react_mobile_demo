import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import store, { history } from '../../store';
import page from '../../hoc/page';
import logo from './logo.svg';
import './style.css';

const Home = page(() => import('../Home'), {
    name: 'home',
    url: '/home',
    title: '主页'
  }),
  Desc = page(() => import('../Desc'), {
    name: 'desc',
    title: '描述'
  }),
  NoMatch = page(() => import('../NoMatch'), {
    name: '404',
    title: '404'
  });

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="app">
            <div className="app__header">
              <img src={logo} className="app__logo" alt="logo" />
              <h2>Welcome to React</h2>
              <NavLink activeClassName="active" exact to="/">
                主页
              </NavLink>
              <NavLink activeClassName="active" to="/desc">
                描述
              </NavLink>
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/desc" component={Desc} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

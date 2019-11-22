/**
 * @fileoverview main application file that sets up routing for child components
 * @author Daniel Bell
 */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SecureRoute } from 'react-route-guard';
import Home from './components/home';
import Register from './components/register';
import Banner from './components/banner';
import Projects from './components/projects';
import Blog from './components/blog';
import About from './components/about';
import Login from './components/login';
import User from './components/user';
import Admin from './components/admin';
import UserAuthGuard from './_common/guards/user';
import AdminAuthGuard from './_common/guards/admin';

function App() {
  return (
      <BrowserRouter>
        <div>
          <Banner />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <SecureRoute path='/user' component={User} routeGuard={UserAuthGuard} redirectToPathWhenFail='/' />
            <SecureRoute path='/admin' component={Admin} routeGuard={AdminAuthGuard} redirectToPathWhenFail='/' />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;

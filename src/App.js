/**
 * @fileoverview main application file that sets up routing for child components
 * @author Daniel Bell
 */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SecureRoute } from 'react-route-guard';
import Home from './components/home';
//import Register from './components/register';
import Banner from './components/banner';
import Projects from './components/projects';
import Blog from './components/blog';
import About from './components/about';
import User from './components/user';
import Admin from './components/admin';
import UserAuthGuard from './_common/guards/user';
import AdminAuthGuard from './_common/guards/admin';
import EditHome from './components/admin/home';
import EditAbout from './components/admin/about';
import PostNew from './components/admin/post-new';
import PostEdit from './components/admin/post-edit';
import PostView from './components/admin/post-view';
import ProjectNew from './components/admin/project-new';
import ProjectEdit from './components/admin/project-edit';
import ProjectView from './components/admin/project-view';
import UsersNew from './components/admin/users-new';
import UsersView from './components/admin/users-view';
import Missing from './components/404';

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
          {/*<Route path="/register" component={Register} />*/}
          <SecureRoute path='/user' component={User} routeGuard={UserAuthGuard} redirectToPathWhenFail='/' />
          <SecureRoute path='/admin' component={Admin} routeGuard={AdminAuthGuard} redirectToPathWhenFail='/' />
          <SecureRoute path='/edit-home' component={EditHome} routeGuard={AdminAuthGuard} redirectToPathWhenFail='/' />
          <SecureRoute path='/edit-about' component={EditAbout} routeGuard={AdminAuthGuard} redirectToPathWhenFail='/' />
          <SecureRoute path='/post-new' component={PostNew} routeGuard={AdminAuthGuard} redirectToPathWhenFail='/' />
          <SecureRoute path='/post-edit' component={PostEdit} routeGuard={AdminAuthGuard} redirectToPathWhenFail='/' />
          <SecureRoute path='/post-view' component={PostView} routeGuard={AdminAuthGuard} redirectToPathWhenFail='/' />
          <SecureRoute path='/project-new' component={ProjectNew} routeGuard={AdminAuthGuard} redirectToPathWhenFail='/' />
          <SecureRoute path='/project-edit' component={ProjectEdit} routeGuard={AdminAuthGuard} redirectToPathWhenFail='/' />
          <SecureRoute path='/project-view' component={ProjectView} routeGuard={AdminAuthGuard} redirectToPathWhenFail='/' />
          <SecureRoute path='/users-new' component={UsersNew} routeGuard={AdminAuthGuard} redirectToPathWhenFail='/' />
          <SecureRoute path='/users-view' component={UsersView} routeGuard={AdminAuthGuard} redirectToPathWhenFail='/' />
          <Route path="*" component={Missing}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

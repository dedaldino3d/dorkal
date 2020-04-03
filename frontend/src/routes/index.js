import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import Signup from '../components/Signup/presenter';
import Login from '../components/Login/index';
import Sidebar from '../components/SideBar/presenter'
import UserProfileForm from '../components/UserProfile/presenter'
import Feed from '../components/Feed/presenter'
import SideBarRight from '../components/SideBar_right/presenter'
import Search from '../components/Search/presenter'
import PrivateRoute from './PrivateRoute'
import Home from '../components/Home/presenter'


export const Routes = () => (
	<Router>
	    <Switch>
            {/*<SideBarRight/>*/}
            {/*<Search/>*/}
            {/*<Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />*/}
            <Route path='/profile' component={UserProfileForm} /> 
            <Route path='/feed' component={Feed} />
            <Route  path='/home' component={Home} />
            
	    </Switch>
	</Router>
)


export default Routes
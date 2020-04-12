import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import Signup from '../components/Signup';
import Login from '../components/Login';
import Sidebar from '../components/SideBar/presenter'
import UserProfile from '../components/UserProfile'
import Feed from '../components/Feed'
import SideBarRight from '../components/SideBar_right/presenter'
import PrivateRoute from './PrivateRoute'
import Home from '../components/Home/presenter'
import Settings from '../components/Settings/presenter'
import Message from '../components/Message/presenter'
import DisplayMessage from '../components/DisplayMessage/presenter'
import Notifications from '../components/Notifications/presenter'
import SearchForm from '../components/Search'
import MainContainer from '../components/App/Main';

export const Routes = [
    {
        path: '/feed',
        sidebarRight: () => (<SideBarRight/>),
        sidebarLeft: () => (<SearchForm/>),
        main: () => (<Feed/>)
    },
    {
        path: '/profile',
        sidebarRight: () => (<SideBarRight/>),
        sidebarLeft: () => (<SearchForm/>),
        main: () => (<UserProfile/>)
    },
    {
        path: '/messages',
        sidebarRight: () => (<SideBarRight/>),
        sidebarLeft: () => (<SearchForm/>),
        main: () => (<Message/>)
    },
    {
        path: '/displaymessage',
        sidebarRight: () => (<SideBarRight/>),
        sidebarLeft: () => (<SearchForm/>),
        main: () => (<DisplayMessage/>)
    },
    {
        path: '/notifications',
        sidebarRight: () => (<SideBarRight/>),
        sidebarLeft: () => (<SearchForm/>),
        main: () => (<Notifications/>)
    },
    {
        path: '/settings',
        sidebarRight: () => (<SideBarRight/>),
        sidebarLeft: () => (<SearchForm/>),
        main: () => (<Settings/>)
    },
]

export const DefaultRoutes = () => (
    <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route component={MainContainer}/>
        <Route path='*' component={() => (<h1>Page Not Found</h1>)}/>
    </Switch>
)

export default Routes
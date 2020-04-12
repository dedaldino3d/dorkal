import React, { Fragment, useEffect } from 'react';

import store from '../../store/configureStore';
import MainContainer from './styles';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Routes from '../../routes'
import { loadUser } from '../../actions/user'
import Feed from '../Feed/presenter'
import SideBarRight from '../SideBar_right/presenter'
import Search from '../Search'
import Header from '../Header/presenter'
import PrivateRoute from '../../routes/PrivateRoute'


export const Main = props => {

    return (
            <>
            <Header />
            <MainContainer>
                <aside id='aside'>
                    <Switch>
                    {Routes.map((route, index) => (
                        <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.sidebarRight}
                        />
                    ))}
                    </Switch>
                </aside>
                <section>
                    <Switch>
                    {Routes.map((route, index) => (
                        <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                        />
                    ))}
                    </Switch>
                </section>
                {/* <aside className='aside'>
                    <Switch>
                    {Routes.map((route, index) => (
                        <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.sidebarLeft}
                        />
                    ))}
                    </Switch>
                </aside> */}
            </MainContainer>
            </>
    );
}

export default Main;

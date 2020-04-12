import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import store from '../../store/configureStore';

import GlobalStyle from '../Styles/globalStyles';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {DefaultRoutes} from '../../routes'
import { loadUser } from '../../actions/user'
import MainContainer from './Main';

class App extends React.PureComponent {

    componentDidMount(){
        store.dispatch(loadUser())
    }


    render(){
        return (
            <Provider store={store}>
                <Router>
                    <GlobalStyle/>
                    <DefaultRoutes/>
                        {/* <Routes /> */}
                    <MainContainer/>
                </Router>
            </Provider>
        );
    }
}

export default App;

import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import store from '../../store/configureStore';
import MainContainer from './styles';
import GlobalStyle from '../Styles/globalStyles';

import Routes from '../../routes'
import { loadUser } from '../../actions/auth'


class App extends React.PureComponent {

    componentDidMount(){
        store.dispatch(loadUser())        
    }


    render(){
        return (
            <Provider store={store}>
                <GlobalStyle/>
                <MainContainer>
                    <Routes />
                </MainContainer>
            </Provider>
        );
    }
}

export default App;
